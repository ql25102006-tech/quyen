/**
 * Đồng bộ tiến độ học tập giữa LocalStorage và Cloud (Supabase)
 */

// Định nghĩa cấu trúc mặc định cho tiến độ
const DEFAULT_PROGRESS = {
    learnedWords: [],
    quizzesTaken: 0,
    quizScores: [],
    streak: 0,
    lastActiveDate: "",
    activity: [0, 0, 0, 0, 0, 0, 0],
    unlockedAchievements: []
};

/**
 * Lưu tiến độ lên Supabase Cloud
 * @param {string} userId - UUID của user từ Supabase Auth
 * @param {Object} progressData - Dữ liệu tiến độ học tập
 */
async function saveProgressToCloud(userId, progressData) {
    const client = getSupabaseClient();
    if (!client) return false;

    try {
        const { data, error } = await client
            .from('user_progress')
            .upsert({
                user_id: userId,
                learned_words: progressData.learnedWords || [],
                quizzes_taken: progressData.quizzesTaken || 0,
                quiz_scores: progressData.quizScores || [],
                streak: progressData.streak || 0,
                last_active_date: progressData.lastActiveDate || "",
                activity: progressData.activity || [0, 0, 0, 0, 0, 0, 0],
                unlocked_achievements: progressData.unlockedAchievements || [],
                updated_at: new Date()
            }, { onConflict: 'user_id' });

        if (error) {
            console.error("Lỗi khi đồng bộ lên Cloud:", error.message);
            return false;
        }
        return true;
    } catch (err) {
        console.error("Lỗi hệ thống đồng bộ:", err);
        return false;
    }
}

/**
 * Tải tiến độ học tập từ Supabase Cloud
 * @param {string} userId - UUID của user
 * @returns {Object|null} Dữ liệu tiến độ học tập từ Cloud hoặc null nếu lỗi
 */
async function loadProgressFromCloud(userId) {
    const client = getSupabaseClient();
    if (!client) return null;

    try {
        const { data, error } = await client
            .from('user_progress')
            .select('*')
            .eq('user_id', userId)
            .maybeSingle();

        if (error) {
            console.error("Lỗi khi tải dữ liệu từ Cloud:", error.message);
            return null;
        }

        if (data) {
            // Map dữ liệu từ snake_case của Postgres sang camelCase của JavaScript
            return {
                learnedWords: data.learned_words || [],
                quizzesTaken: data.quizzes_taken || 0,
                quizScores: data.quiz_scores || [],
                streak: data.streak || 0,
                lastActiveDate: data.last_active_date || "",
                activity: data.activity || [0, 0, 0, 0, 0, 0, 0],
                unlockedAchievements: data.unlocked_achievements || []
            };
        }
        return null;
    } catch (err) {
        console.error("Lỗi hệ thống tải dữ liệu:", err);
        return null;
    }
}

/**
 * Gộp dữ liệu tiến độ từ LocalStorage và Cloud (Tránh mất mát khi mới đăng ký)
 * Quy tắc gộp:
 * - learnedWords: Gộp cả hai mảng và loại bỏ trùng lặp
 * - streak: Lấy giá trị lớn nhất
 * - quizzesTaken: Lấy giá trị lớn nhất
 * - quizScores: Gộp cả hai mảng
 * - activity: Cộng dồn số lần hoạt động của từng ngày
 * - unlockedAchievements: Gộp cả hai mảng và loại bỏ trùng lặp
 */
function mergeProgress(localData, cloudData) {
    const local = localData || { ...DEFAULT_PROGRESS };
    const cloud = cloudData || { ...DEFAULT_PROGRESS };

    const merged = {
        learnedWords: [...new Set([...(local.learnedWords || []), ...(cloud.learnedWords || [])])],
        quizzesTaken: Math.max(local.quizzesTaken || 0, cloud.quizzesTaken || 0),
        quizScores: [...(local.quizScores || []), ...(cloud.quizScores || [])].slice(-50), // Giới hạn lưu 50 quiz gần nhất
        streak: Math.max(local.streak || 0, cloud.streak || 0),
        lastActiveDate: local.lastActiveDate || cloud.lastActiveDate || "",
        activity: (local.activity || [0, 0, 0, 0, 0, 0, 0]).map((val, idx) => {
            const cloudVal = (cloud.activity && cloud.activity[idx]) ? cloud.activity[idx] : 0;
            return val + cloudVal;
        }),
        unlockedAchievements: [...new Set([...(local.unlockedAchievements || []), ...(cloud.unlockedAchievements || [])])]
    };

    return merged;
}

/**
 * Lấy Profile người dùng từ Supabase (Tên hiển thị, Avatar)
 */
async function getUserProfile(userId) {
    const client = getSupabaseClient();
    if (!client) return null;

    try {
        const { data, error } = await client
            .from('user_profiles')
            .select('*')
            .eq('user_id', userId)
            .maybeSingle();

        if (error) {
            console.error("Lỗi khi tải profile:", error.message);
            return null;
        }
        return data;
    } catch (err) {
        console.error("Lỗi hệ thống profile:", err);
        return null;
    }
}

/**
 * Cập nhật tên hiển thị của người dùng
 */
async function updateUserProfile(userId, displayName, avatarUrl = "") {
    const client = getSupabaseClient();
    if (!client) return false;

    try {
        const updateData = {
            user_id: userId,
            display_name: displayName,
            updated_at: new Date()
        };

        if (avatarUrl) {
            updateData.avatar_url = avatarUrl;
        }

        const { error } = await client
            .from('user_profiles')
            .upsert(updateData, { onConflict: 'user_id' });

        if (error) {
            console.error("Lỗi cập nhật profile:", error.message);
            return false;
        }
        return true;
    } catch (err) {
        console.error("Lỗi hệ thống cập nhật profile:", err);
        return false;
    }
}
