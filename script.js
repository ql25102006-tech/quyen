/* ==================== DATABASE ==================== */

// 1. Vocabulary Data
const VOCABULARY_DATA = [
    { id: 1, eng: "Always", phonetic: "/ˈɔːlweɪz/", vie: "Luôn luôn", type: "Trạng từ", level: "A1", topic: "daily", example: "I always study English in the morning." },
    { id: 2, eng: "Beautiful", phonetic: "/ˈbjuːtɪfl/", vie: "Đẹp", type: "Tính từ", level: "A1", topic: "nature", example: "What a beautiful sunset!" },
    { id: 3, eng: "Delicious", phonetic: "/dɪˈlɪʃəs/", vie: "Thơm ngon", type: "Tính từ", level: "A2", topic: "food", example: "This chocolate cake is delicious." },
    { id: 4, eng: "Adventure", phonetic: "/ədˈventʃə(r)/", vie: "Cuộc phiêu lưu", type: "Danh từ", level: "B1", topic: "travel", example: "They embarked on a new adventure in Asia." },
    { id: 5, eng: "Colleague", phonetic: "/ˈkɒliːɡ/", vie: "Đồng nghiệp", type: "Danh từ", level: "B1", topic: "work", example: "She has lunch with her colleagues every day." },
    { id: 6, eng: "Environment", phonetic: "/ɪnˈvaɪrənmənt/", vie: "Môi trường", type: "Danh từ", level: "B2", topic: "nature", example: "We must protect the environment." },
    { id: 7, eng: "Schedule", phonetic: "/ˈʃedjuːl/", vie: "Lịch trình", type: "Danh từ", level: "A2", topic: "work", example: "I have a busy schedule today." },
    { id: 8, eng: "Luggage", phonetic: "/ˈlʌɡɪdʒ/", vie: "Hành lý", type: "Danh từ", level: "A2", topic: "travel", example: "Keep an eye on your luggage, please." },
    { id: 9, eng: "Ingredient", phonetic: "/ɪnˈɡriːdiənt/", vie: "Thành phần, nguyên liệu", type: "Danh từ", level: "B2", topic: "food", example: "Mix all the ingredients in a bowl." },
    { id: 10, eng: "Healthy", phonetic: "/ˈhelθi/", vie: "Khỏe mạnh", type: "Tính từ", level: "A1", topic: "daily", example: "Eating vegetables keeps you healthy." }
];

// 2. Grammar Data
const GRAMMAR_DATA = {
    tenses: {
        title: "Thì Hiện Tại Đơn (Present Simple)",
        formula: "S + V(s/es) / S + am/is/are",
        exampleEng: "She watches English videos every evening.",
        exampleVie: "Cô ấy xem các video tiếng Anh mỗi tối.",
        note: "Dùng để diễn tả một sự thật hiển nhiên, một thói quen hoặc hành động lặp đi lặp lại ở hiện tại.",
        exercises: [
            { question: "He ___ (like) playing soccer with friends.", options: ["like", "likes", "liking", "liked"], correct: 1 },
            { question: "Water ___ (boil) at 100 degrees Celsius.", options: ["boil", "boils", "boiling", "boiled"], correct: 1 },
            { question: "They ___ (not / go) to work on Sundays.", options: ["doesn't go", "don't go", "isn't go", "aren't go"], correct: 1 },
            { question: "___ you (speak) English fluently?", options: ["Do", "Does", "Are", "Is"], correct: 0 },
            { question: "My mother always ___ (get) up early.", options: ["get", "gets", "getting", "goted"], correct: 1 }
        ]
    },
    sentences: {
        title: "Cấu trúc câu So sánh hơn (Comparative)",
        formula: "S + V + adj-er + than + N / S + V + more + adj-long + than + N",
        exampleEng: "This lesson is more interesting than the last one.",
        exampleVie: "Bài học này thú vị hơn bài học trước.",
        note: "Tính từ ngắn thêm đuôi '-er'. Tính từ dài dùng từ 'more' đứng trước tính từ.",
        exercises: [
            { question: "Gold is ___ (heavy) than iron.", options: ["heavyer", "heavier", "more heavy", "heaviest"], correct: 1 },
            { question: "This phone is ___ (expensive) than mine.", options: ["expensiver", "more expensive", "most expensive", "expensive"], correct: 1 },
            { question: "Lan runs ___ (fast) than Hoa.", options: ["faster", "fastest", "more fast", "fastly"], correct: 0 },
            { question: "Learning English is ___ (easy) than I thought.", options: ["easier", "more easy", "easyer", "easiest"], correct: 0 },
            { question: "A city is usually ___ (noisy) than a village.", options: ["noisier", "more noisy", "noisy", "noisiest"], correct: 0 }
        ]
    },
    modal: {
        title: "Động từ khuyết thiếu (Modal Verbs)",
        formula: "S + Modal Verb + V-bare (động từ nguyên mẫu)",
        exampleEng: "You should practice speaking English daily.",
        exampleVie: "Bạn nên luyện nói tiếng Anh mỗi ngày.",
        note: "Các động từ khuyết thiếu phổ biến: can, could, should, must, may, might. Không chia động từ theo chủ ngữ sau Modal verbs.",
        exercises: [
            { question: "You ___ (must) wear a helmet when riding a motorbike.", options: ["should", "must", "may", "can"], correct: 1 },
            { question: "I ___ (can) speak three languages fluently.", options: ["can", "should", "must", "may"], correct: 0 },
            { question: "It ___ (might) rain tonight, take an umbrella.", options: ["must", "should", "might", "can"], correct: 2 },
            { question: "You ___ (should not) eat too much fast food.", options: ["should not", "must not", "cannot", "may not"], correct: 0 },
            { question: "___ I borrow your pen for a minute?", options: ["Must", "Should", "May", "Need"], correct: 2 }
        ]
    },
    conditional: {
        title: "Câu điều kiện loại 1 (Conditional Type 1)",
        formula: "If + S + V(s/es) [Present Simple], S + will/can/should + V-bare",
        exampleEng: "If you study hard, you will pass the English exam.",
        exampleVie: "Nếu bạn học chăm chỉ, bạn sẽ đỗ kỳ thi tiếng Anh.",
        note: "Dùng để diễn tả sự việc có thể xảy ra ở hiện tại hoặc tương lai nếu có điều kiện nhất định.",
        exercises: [
            { question: "If it ___ (rain) tomorrow, we will stay at home.", options: ["rain", "rains", "will rain", "rained"], correct: 1 },
            { question: "If you ___ (not eat) breakfast, you will feel tired.", options: ["don't eat", "doesn't eat", "won't eat", "didn't eat"], correct: 0 },
            { question: "She will pass the exam if she ___ (study) hard.", options: ["studies", "will study", "study", "studied"], correct: 0 },
            { question: "If I have enough money, I ___ (buy) a new English course.", options: ["buy", "will buy", "bought", "would buy"], correct: 1 },
            { question: "What ___ you do if you miss the train?", options: ["will", "do", "are", "would"], correct: 0 }
        ]
    }
};

// 3. Quiz Database
const QUIZ_DATA = {
    vocabulary: [
        { question: "Từ nào sau đây có nghĩa là 'Hành lý'?", options: ["Colleague", "Luggage", "Ingredient", "Adventure"], correct: 1 },
        { question: "Từ 'Delicious' thuộc từ loại gì?", options: ["Danh từ", "Động từ", "Tính từ", "Trạng từ"], correct: 2 },
        { question: "Điền từ thích hợp: 'The Amazon forest is a ___ environment.'", options: ["always", "colleague", "healthy", "beautiful"], correct: 3 },
        { question: "Từ nào có nghĩa là 'Đồng nghiệp'?", options: ["Colleague", "Luggage", "Ingredient", "Schedule"], correct: 0 },
        { question: "Nghĩa của từ 'Ingredient' là gì?", options: ["Thành phần", "Cuộc phiêu lưu", "Môi trường", "Lịch trình"], correct: 0 }
    ],
    grammar: [
        { question: "Điền vào chỗ trống: 'She ___ her homework every night.'", options: ["do", "does", "doing", "did"], correct: 1 },
        { question: "So sánh hơn đúng của 'good' là gì?", options: ["gooder", "more good", "better", "best"], correct: 2 },
        { question: "Chọn câu đúng nhất:", options: ["She can speaks English.", "She can speak English.", "She cans speak English.", "She can speaking English."], correct: 1 },
        { question: "Điền từ: 'If he ___ early, he will catch the bus.'", options: ["wake up", "wakes up", "waking up", "will wake up"], correct: 1 },
        { question: "Chọn động từ khuyết thiếu khuyên bảo: 'You ___ visit a dentist.'", options: ["must", "might", "should", "can"], correct: 2 }
    ],
    listening: [
        { question: "Nghe từ phát âm sau và chọn từ đúng nhất (Bấm nút loa để nghe)", word: "Always", options: ["Always", "Away", "Allow", "Alley"], correct: 0 },
        { question: "Nghe từ phát âm sau và chọn từ đúng nhất (Bấm nút loa để nghe)", word: "Beautiful", options: ["Beautify", "Beat", "Beautiful", "Bitter"], correct: 2 },
        { question: "Nghe từ phát âm sau và chọn từ đúng nhất (Bấm nút loa để nghe)", word: "Adventure", options: ["Advent", "Advance", "Adversary", "Adventure"], correct: 3 },
        { question: "Nghe từ phát âm sau và chọn từ đúng nhất (Bấm nút loa để nghe)", word: "Colleague", options: ["College", "Colleague", "Collect", "Correction"], correct: 1 },
        { question: "Nghe từ phát âm sau và chọn từ đúng nhất (Bấm nút loa để nghe)", word: "Environment", options: ["Entertainment", "Environment", "Envelop", "Engine"], correct: 1 }
    ]
};

// 4. Conversation Data
const CONVERSATION_DATA = {
    greeting: [
        { speaker: "A", name: "Alex", en: "Hello! Good morning, nice to meet you.", vi: "Xin chào! Buổi sáng tốt lành, rất vui được gặp bạn." },
        { speaker: "B", name: "Bella", en: "Good morning! Nice to meet you too. How are you today?", vi: "Chào buổi sáng! Tôi cũng rất vui được gặp bạn. Hôm nay bạn khỏe không?" },
        { speaker: "A", name: "Alex", en: "I'm doing great, thank you. What is your name?", vi: "Tôi khỏe, cảm ơn bạn. Tên bạn là gì?" },
        { speaker: "B", name: "Bella", en: "My name is Bella. Are you new here?", vi: "Tên tôi là Bella. Bạn là người mới ở đây phải không?" },
        { speaker: "A", name: "Alex", en: "Yes, this is my first day. I hope we can be good friends.", vi: "Đúng vậy, đây là ngày đầu tiên của tôi. Hy vọng chúng ta sẽ là những người bạn tốt." }
    ],
    shopping: [
        { speaker: "A", name: "Customer", en: "Excuse me, how much is this English handbook?", vi: "Xin hỏi cuốn sổ tay tiếng Anh này giá bao nhiêu ạ?" },
        { speaker: "B", name: "Seller", en: "It is ten dollars. It has all the important words.", vi: "Nó giá 10 đô la. Nó có tất cả các từ vựng quan trọng." },
        { speaker: "A", name: "Customer", en: "Great! Do you accept credit card payments?", vi: "Tuyệt vời! Cửa hàng có chấp nhận thanh toán thẻ tín dụng không?" },
        { speaker: "B", name: "Seller", en: "Yes, we accept both cash and credit cards.", vi: "Có, chúng tôi nhận cả tiền mặt và thẻ tín dụng." },
        { speaker: "A", name: "Customer", en: "Awesome, I will take this book, please.", vi: "Tuyệt, tôi sẽ lấy cuốn sách này nhé." }
    ],
    restaurant: [
        { speaker: "A", name: "Waiter", en: "Welcome! Are you ready to order now?", vi: "Chào mừng quý khách! Quý khách đã sẵn sàng gọi món chưa?" },
        { speaker: "B", name: "Guest", en: "Yes, I would like a steak and a glass of red wine.", vi: "Vâng, tôi muốn một phần bít tết và một ly rượu vang đỏ." },
        { speaker: "A", name: "Waiter", en: "How would you like your steak cooked?", vi: "Bít tết quý khách muốn chín như thế nào ạ?" },
        { speaker: "B", name: "Guest", en: "Medium-rare, please. And could I get some water?", vi: "Tái chín nhé. Và cho tôi xin thêm một cốc nước lọc được không?" },
        { speaker: "A", name: "Waiter", en: "Sure, your food will be ready in fifteen minutes.", vi: "Dạ được, món ăn của quý khách sẽ sẵn sàng trong 15 phút." }
    ],
    hotel: [
        { speaker: "A", name: "Receptionist", en: "Good afternoon, how can I help you?", vi: "Chào buổi chiều, tôi có thể giúp gì cho quý khách?" },
        { speaker: "B", name: "Guest", en: "I have a reservation under the name John Smith.", vi: "Tôi có đặt phòng trước dưới tên John Smith." },
        { speaker: "A", name: "Receptionist", en: "Ah, yes. A double room for three nights. Is that correct?", vi: "À vâng. Một phòng đôi trong ba đêm. Đúng không ạ?" },
        { speaker: "B", name: "Guest", en: "Yes, that's correct. Is breakfast included?", vi: "Đúng vậy. Phòng đã bao gồm ăn sáng chưa?" },
        { speaker: "A", name: "Receptionist", en: "Yes, breakfast is served from 7 to 10 AM. Here is your key.", vi: "Dạ rồi, bữa sáng được phục vụ từ 7 đến 10 giờ. Đây là chìa khóa của bạn." }
    ],
    airport: [
        { speaker: "A", name: "Officer", en: "Can I see your passport and ticket, please?", vi: "Tôi có thể xem hộ chiếu và vé của bạn được không?" },
        { speaker: "B", name: "Traveler", en: "Here you are. I am flying to London today.", vi: "Gửi bạn. Hôm nay tôi bay đi London." },
        { speaker: "A", name: "Officer", en: "Are you checking any bags?", vi: "Bạn có ký gửi hành lý nào không?" },
        { speaker: "B", name: "Traveler", en: "Yes, just this one suitcase. Can I take this bag as carry-on?", vi: "Có, chỉ một chiếc vali này. Tôi có thể mang túi này lên máy bay không?" },
        { speaker: "A", name: "Officer", en: "Yes, that fits. Here is your boarding pass. Have a nice flight!", vi: "Được chứ, kích cỡ vừa vặn. Đây là thẻ lên máy bay của bạn. Chúc bạn chuyến bay vui vẻ!" }
    ]
};

// Achievements
const ACHIEVEMENTS_DATA = [
    { id: "streak_1", title: "Khởi Đầu May Mắn", desc: "Học tập 1 ngày", icon: "🔥", target: 1, type: "streak" },
    { id: "streak_7", title: "Thói Quen Vàng", desc: "Học tập liên tục 7 ngày", icon: "👑", target: 7, type: "streak" },
    { id: "vocab_5", title: "Vốn Từ Vững Vàng", desc: "Thuộc 5 từ vựng mới", icon: "📚", target: 5, type: "vocab" },
    { id: "quiz_3", title: "Nhà Vô Địch Quiz", desc: "Hoàn thành 3 bài Quiz", icon: "🏆", target: 3, type: "quiz" }
];

/* ==================== GLOBAL STATES ==================== */
let userProgress = {
    learnedWords: [],
    quizzesTaken: 0,
    quizScores: [],
    streak: 0,
    lastActiveDate: "",
    activity: [0, 0, 0, 0, 0, 0, 0], // Monday to Sunday count
    unlockedAchievements: []
};

// Flashcard state
let currentVocabList = [...VOCABULARY_DATA];
let currentVocabIndex = 0;

// Grammar exercise state
let currentGrammarTab = "tenses";
let currentExerciseIndex = 0;
let selectedExerciseOption = null;

// Quiz state
let quizType = "vocabulary";
let quizDifficulty = "medium";
let quizQuestions = [];
let currentQuizIndex = 0;
let quizScoreValue = 0;
let quizTimerInterval = null;
let quizSecondsLeft = 30;
let quizAnswersRecorded = [];

// Conversation State
let currentConvTopic = "greeting";
let currentConvUtterances = [];
let synth = window.speechSynthesis;

// Supabase Auth State
let currentUser = null;

/* ==================== APP INITIALIZATION ==================== */
document.addEventListener("DOMContentLoaded", async () => {
    await checkSupabaseAuth();
    await loadProgress();
    initNavbar();
    initTheme();
    initStatsCount();
    initFlashcards();
    initGrammarSection();
    initQuizSection();
    initConversationSection();
    initProgressDashboard();
    checkDailyStreak();

    // Back to top
    const backToTopBtn = document.getElementById("backToTop");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add("visible");
        } else {
            backToTopBtn.classList.remove("visible");
        }
    });
    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

/* ==================== THEME & NAVBAR ==================== */
function initTheme() {
    const themeToggle = document.getElementById("themeToggle");
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark") {
        document.body.classList.add("dark");
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        document.body.classList.remove("dark");
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        const isDark = document.body.classList.contains("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
        themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });
}

function initNavbar() {
    const navbar = document.getElementById("navbar");
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");
    const links = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
    });

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            links.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
            hamburger.classList.remove("active");
            navLinks.classList.remove("active");
        });
    });

    // Active link based on scroll
    window.addEventListener("scroll", () => {
        let current = "";
        const sections = document.querySelectorAll("section");
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 120) {
                current = section.getAttribute("id");
            }
        });

        links.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });
}

/* ==================== SUPABASE AUTH LOGIC ==================== */
async function checkSupabaseAuth() {
    const client = getSupabaseClient();
    if (!client) return;

    try {
        const { data: { session } } = await client.auth.getSession();
        const authNav = document.getElementById("authNavContainer");
        const userNav = document.getElementById("userNavContainer");

        if (session && session.user) {
            currentUser = session.user;

            // Tải thông tin Profile hiển thị
            const profile = await getUserProfile(currentUser.id);
            const dispName = profile ? profile.display_name : (currentUser.email.split('@')[0]);

            document.getElementById("userNameNav").innerText = dispName;

            // Hiển thị cụm User Menu và ẩn cụm Login
            if (authNav) authNav.classList.add("hidden");
            if (userNav) userNav.classList.remove("hidden");

            // Thiết lập sự kiện đăng xuất
            const logoutBtn = document.getElementById("logoutBtnNav");
            if (logoutBtn) {
                logoutBtn.addEventListener("click", async (e) => {
                    e.preventDefault();
                    const { error } = await client.auth.signOut();
                    if (!error) {
                        // Reset về Guest Mode
                        localStorage.removeItem("engmaster_progress");
                        window.location.reload();
                    }
                });
            }

            // Click vào Avatar mở dropdown menu tiện dụng trên Mobile
            const avatarNav = document.getElementById("userAvatarNav");
            if (avatarNav) {
                avatarNav.addEventListener("click", (e) => {
                    e.stopPropagation();
                    userNav.classList.toggle("active");
                });
                document.addEventListener("click", () => {
                    userNav.classList.remove("active");
                });
            }
        } else {
            currentUser = null;
            if (authNav) authNav.classList.remove("hidden");
            if (userNav) userNav.classList.add("hidden");
        }
    } catch (err) {
        console.error("Lỗi Auth Supabase:", err);
    }
}

/* ==================== LOCALSTORAGE PROGRESS ==================== */
async function loadProgress() {
    // 1. Nếu đã đăng nhập, tải từ Cloud Supabase
    if (currentUser) {
        const cloudData = await loadProgressFromCloud(currentUser.id);
        if (cloudData) {
            userProgress = cloudData;
            // Cập nhật lại local cache để sử dụng offline khi cần
            localStorage.setItem("engmaster_progress", JSON.stringify(userProgress));
            return;
        }
    }

    // 2. Fallback về LocalStorage (Guest Mode hoặc khi lỗi Cloud/Offline)
    const data = localStorage.getItem("engmaster_progress");
    if (data) {
        try {
            userProgress = JSON.parse(data);
        } catch (e) {
            console.error("Lỗi parse JSON progress:", e);
        }
    } else {
        saveProgress();
    }
}

async function saveProgress() {
    // Lưu vào LocalStorage làm cache cục bộ
    localStorage.setItem("engmaster_progress", JSON.stringify(userProgress));

    // Nếu đã đăng nhập, tự động đồng bộ thời gian thực lên Supabase Cloud
    if (currentUser) {
        await saveProgressToCloud(currentUser.id, userProgress);
    }
}

function updateProgressStat(key, value) {
    userProgress[key] = value;
    saveProgress();
    initProgressDashboard();
    checkAchievements();
}

function recordTodayActivity() {
    const today = new Date();
    // Monday is 1, Sunday is 0 -> Convert to Monday (0) to Sunday (6)
    let dayIndex = today.getDay() - 1;
    if (dayIndex === -1) dayIndex = 6;

    userProgress.activity[dayIndex]++;
    saveProgress();
    renderActivityChart();
}

function checkDailyStreak() {
    const todayStr = new Date().toDateString();
    const lastActive = userProgress.lastActiveDate;

    if (lastActive) {
        const lastDate = new Date(lastActive);
        const todayDate = new Date(todayStr);
        const diffTime = Math.abs(todayDate - lastDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 1) {
            userProgress.streak += 1;
        } else if (diffDays > 1) {
            userProgress.streak = 1;
        }
    } else {
        userProgress.streak = 1;
    }

    userProgress.lastActiveDate = todayStr;
    saveProgress();
}

/* ==================== STATS ANIMS ==================== */
function initStatsCount() {
    const stats = document.querySelectorAll(".stat-number");
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute("data-target"));
        let count = 0;
        const increment = Math.ceil(target / 100);

        const updateCount = () => {
            count += increment;
            if (count >= target) {
                stat.innerText = target;
            } else {
                stat.innerText = count;
                setTimeout(updateCount, 15);
            }
        };
        updateCount();
    });
}

/* ==================== FLASHCARDS ==================== */
function initFlashcards() {
    const flashcard = document.getElementById("flashcard");
    const speakBtn = document.getElementById("speakBtn");
    const prevBtn = document.getElementById("prevWord");
    const nextBtn = document.getElementById("nextWord");
    const knowBtn = document.getElementById("knowBtn");
    const learnBtn = document.getElementById("learnBtn");
    const filterButtons = document.querySelectorAll(".filter-btn");

    // Flip card
    flashcard.addEventListener("click", (e) => {
        // Prevent flipping if clicked speak button
        if (e.target.closest("#speakBtn")) return;
        flashcard.classList.toggle("flipped");
    });

    // TTS Voice Speak
    speakBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        speakWord(currentVocabList[currentVocabIndex].eng);
    });

    // Next / Prev Words
    prevBtn.addEventListener("click", () => {
        if (currentVocabIndex > 0) {
            currentVocabIndex--;
            updateFlashcardView();
        }
    });

    nextBtn.addEventListener("click", () => {
        if (currentVocabIndex < currentVocabList.length - 1) {
            currentVocabIndex++;
            updateFlashcardView();
        }
    });

    // Know & Relearn actions
    knowBtn.addEventListener("click", () => {
        const word = currentVocabList[currentVocabIndex];
        if (!userProgress.learnedWords.includes(word.eng)) {
            userProgress.learnedWords.push(word.eng);
            saveProgress();
            recordTodayActivity();
            initProgressDashboard();
            checkAchievements();
        }
        showActionStatus("know");
        setTimeout(goToNextWord, 500);
    });

    learnBtn.addEventListener("click", () => {
        const word = currentVocabList[currentVocabIndex];
        // Remove from learned list if marked relearn
        const idx = userProgress.learnedWords.indexOf(word.eng);
        if (idx !== -1) {
            userProgress.learnedWords.splice(idx, 1);
            saveProgress();
            initProgressDashboard();
        }
        showActionStatus("learn");
    });

    // Topic Filter
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const topic = btn.getAttribute("data-topic");
            if (topic === "all") {
                currentVocabList = [...VOCABULARY_DATA];
            } else {
                currentVocabList = VOCABULARY_DATA.filter(item => item.topic === topic);
            }

            currentVocabIndex = 0;
            updateFlashcardView();
        });
    });

    updateFlashcardView();
}

function updateFlashcardView() {
    const flashcard = document.getElementById("flashcard");
    flashcard.classList.remove("flipped");

    if (currentVocabList.length === 0) {
        document.getElementById("wordEng").innerText = "No word";
        document.getElementById("wordPhonetic").innerText = "";
        document.getElementById("wordVie").innerText = "Chưa có từ";
        document.getElementById("wordType").innerText = "";
        document.getElementById("wordExample").querySelector("span").innerText = "";
        document.getElementById("wordCounter").innerText = "0 / 0";
        return;
    }

    const currentWord = currentVocabList[currentVocabIndex];
    document.getElementById("wordLevel").innerText = currentWord.level;
    document.getElementById("wordEng").innerText = currentWord.eng;
    document.getElementById("wordPhonetic").innerText = currentWord.phonetic;
    document.getElementById("wordVie").innerText = currentWord.vie;
    document.getElementById("wordType").innerText = currentWord.type;
    document.getElementById("wordExample").querySelector("span").innerText = `"${currentWord.example}"`;
    document.getElementById("wordCounter").innerText = `${currentVocabIndex + 1} / ${currentVocabList.length}`;
}

function goToNextWord() {
    if (currentVocabIndex < currentVocabList.length - 1) {
        currentVocabIndex++;
        updateFlashcardView();
    }
}

function showActionStatus(action) {
    const flashcard = document.getElementById("flashcard");
    const overlay = document.createElement("div");
    overlay.className = `flashcard-status-overlay ${action}`;
    overlay.innerHTML = action === "know" ? '<i class="fas fa-check-circle"></i> Perfect!' : '<i class="fas fa-redo"></i> Review Later!';

    // Styling status feedback overlay directly
    Object.assign(overlay.style, {
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: action === 'know' ? 'rgba(34, 197, 94, 0.9)' : 'rgba(239, 68, 68, 0.9)',
        color: 'white',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        zIndex: '10',
        transition: 'opacity 0.3s ease',
        pointerEvents: 'none'
    });

    flashcard.appendChild(overlay);
    setTimeout(() => {
        overlay.style.opacity = 0;
        setTimeout(() => overlay.remove(), 300);
    }, 800);
}

function speakWord(text) {
    if (!synth) return;
    if (synth.speaking) {
        synth.cancel();
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.9;
    synth.speak(utterance);
}

/* ==================== GRAMMAR ==================== */
function initGrammarSection() {
    const tabs = document.querySelectorAll(".grammar-tab");
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            currentGrammarTab = tab.getAttribute("data-tab");
            currentExerciseIndex = 0;
            loadGrammarLesson();
            loadGrammarExercise();
        });
    });

    // Grammar exercise buttons
    document.getElementById("prevExercise").addEventListener("click", () => {
        if (currentExerciseIndex > 0) {
            currentExerciseIndex--;
            loadGrammarExercise();
        }
    });

    document.getElementById("nextExercise").addEventListener("click", () => {
        const lesson = GRAMMAR_DATA[currentGrammarTab];
        if (currentExerciseIndex < lesson.exercises.length - 1) {
            currentExerciseIndex++;
            loadGrammarExercise();
        }
    });

    loadGrammarLesson();
    loadGrammarExercise();
}

function loadGrammarLesson() {
    const lesson = GRAMMAR_DATA[currentGrammarTab];
    const container = document.getElementById("grammarContent");

    container.innerHTML = `
        <h3><i class="fas fa-book-reader"></i> ${lesson.title}</h3>
        <p><strong>Cấu trúc:</strong></p>
        <div class="grammar-formula">${lesson.formula}</div>
        <p><strong>Ví dụ minh họa:</strong></p>
        <div class="grammar-example">
            <div class="en">${lesson.exampleEng}</div>
            <div class="vi">${lesson.exampleVie}</div>
        </div>
        <div class="grammar-note">
            <i class="fas fa-info-circle"></i> ${lesson.note}
        </div>
    `;
}

function loadGrammarExercise() {
    const lesson = GRAMMAR_DATA[currentGrammarTab];
    const exercise = lesson.exercises[currentExerciseIndex];

    document.getElementById("exerciseCounter").innerText = `${currentExerciseIndex + 1} / ${lesson.exercises.length}`;
    document.getElementById("exerciseQuestion").innerText = exercise.question;

    const optionsContainer = document.getElementById("exerciseOptions");
    optionsContainer.innerHTML = "";

    const feedback = document.getElementById("exerciseFeedback");
    feedback.className = "exercise-feedback";
    feedback.innerText = "";

    exercise.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.className = "exercise-option";
        btn.innerText = opt;
        btn.addEventListener("click", () => handleSelectGrammarOption(idx, btn));
        optionsContainer.appendChild(btn);
    });
}

function handleSelectGrammarOption(selectedIndex, buttonElement) {
    const lesson = GRAMMAR_DATA[currentGrammarTab];
    const exercise = lesson.exercises[currentExerciseIndex];
    const optionsContainer = document.getElementById("exerciseOptions");
    const optionButtons = optionsContainer.querySelectorAll(".exercise-option");
    const feedback = document.getElementById("exerciseFeedback");

    optionButtons.forEach((btn, idx) => {
        btn.classList.add("disabled");
        if (idx === exercise.correct) {
            btn.classList.add("correct");
        }
    });

    if (selectedIndex === exercise.correct) {
        buttonElement.classList.add("correct");
        feedback.innerText = "Chính xác! Bạn làm rất tốt.";
        feedback.classList.add("correct", "show");
        recordTodayActivity();
    } else {
        buttonElement.classList.add("wrong");
        feedback.innerText = "Rất tiếc! Thử lại ở các câu tiếp theo nhé.";
        feedback.classList.add("wrong", "show");
    }
}

/* ==================== QUIZ SYSTEM ==================== */
function initQuizSection() {
    const optionCards = document.querySelectorAll(".quiz-option-card");
    optionCards.forEach(card => {
        card.addEventListener("click", () => {
            optionCards.forEach(c => c.classList.remove("selected"));
            card.classList.add("selected");
            quizType = card.getAttribute("data-type");
        });
    });

    document.getElementById("startQuiz").addEventListener("click", startQuiz);
    document.getElementById("retryQuiz").addEventListener("click", startQuiz);
    document.getElementById("newQuiz").addEventListener("click", resetQuizView);
}

function startQuiz() {
    document.getElementById("quizSetup").classList.add("hidden");
    document.getElementById("quizResult").classList.add("hidden");
    document.getElementById("quizGame").classList.remove("hidden");

    // Gather questions
    quizDifficulty = document.getElementById("quizDifficulty").value;

    if (quizType === "mixed") {
        quizQuestions = [...QUIZ_DATA.vocabulary, ...QUIZ_DATA.grammar, ...QUIZ_DATA.listening];
    } else {
        quizQuestions = [...QUIZ_DATA[quizType]];
    }

    // Shuffle and pick 5 questions for simple demo
    quizQuestions = quizQuestions.sort(() => 0.5 - Math.random()).slice(0, 5);

    currentQuizIndex = 0;
    quizScoreValue = 0;
    quizAnswersRecorded = [];

    loadQuizQuestion();
}

function loadQuizQuestion() {
    if (currentQuizIndex >= quizQuestions.length) {
        finishQuiz();
        return;
    }

    resetTimer();

    const q = quizQuestions[currentQuizIndex];
    document.getElementById("quizQuestionNum").innerText = `Câu ${currentQuizIndex + 1} / ${quizQuestions.length}`;
    document.getElementById("quizScore").innerHTML = `<i class="fas fa-star"></i> ${quizScoreValue} điểm`;

    // Progress Bar
    const progressPercent = ((currentQuizIndex) / quizQuestions.length) * 100;
    document.getElementById("quizProgressBar").style.width = `${progressPercent}%`;

    // Setup Question
    const questionText = document.getElementById("quizQuestion");
    questionText.innerText = q.question;

    const answersContainer = document.getElementById("quizAnswers");
    answersContainer.innerHTML = "";

    // Show/Hide speaker for listening quiz
    const listenBtn = document.getElementById("quizListenBtn");
    if (q.word) {
        listenBtn.classList.remove("hidden");
    } else {
        if (listenBtn) listenBtn.classList.add("hidden");
    }

    q.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.className = "quiz-answer";
        btn.innerText = opt;
        btn.addEventListener("click", () => handleQuizAnswer(idx, btn));
        answersContainer.appendChild(btn);
    });

    startTimer();
}

function speakQuizWord() {
    const q = quizQuestions[currentQuizIndex];
    if (q && q.word) {
        speakWord(q.word);
    }
}

function startTimer() {
    quizSecondsLeft = 30;
    document.getElementById("timerValue").innerText = quizSecondsLeft;

    quizTimerInterval = setInterval(() => {
        quizSecondsLeft--;
        document.getElementById("timerValue").innerText = quizSecondsLeft;

        if (quizSecondsLeft <= 0) {
            clearInterval(quizTimerInterval);
            handleQuizTimeout();
        }
    }, 1000);
}

function resetTimer() {
    if (quizTimerInterval) {
        clearInterval(quizTimerInterval);
    }
}

function handleQuizAnswer(selectedIndex, buttonElement) {
    resetTimer();
    const q = quizQuestions[currentQuizIndex];
    const answersContainer = document.getElementById("quizAnswers");
    const buttons = answersContainer.querySelectorAll(".quiz-answer");

    buttons.forEach((btn, idx) => {
        btn.classList.add("disabled");
        if (idx === q.correct) {
            btn.classList.add("correct");
        }
    });

    const correct = selectedIndex === q.correct;
    quizAnswersRecorded.push({ question: q.question, chosen: selectedIndex, correct: q.correct, status: correct });

    if (correct) {
        buttonElement.classList.add("correct");
        quizScoreValue += 20; // 20 points per question
        document.getElementById("quizScore").innerHTML = `<i class="fas fa-star"></i> ${quizScoreValue} điểm`;
    } else {
        buttonElement.classList.add("wrong");
    }

    setTimeout(() => {
        currentQuizIndex++;
        loadQuizQuestion();
    }, 1500);
}

function handleQuizTimeout() {
    const q = quizQuestions[currentQuizIndex];
    quizAnswersRecorded.push({ question: q.question, chosen: -1, correct: q.correct, status: false });

    // Highlight correct
    const answersContainer = document.getElementById("quizAnswers");
    const buttons = answersContainer.querySelectorAll(".quiz-answer");
    buttons.forEach((btn, idx) => {
        btn.classList.add("disabled");
        if (idx === q.correct) {
            btn.classList.add("correct");
        }
    });

    setTimeout(() => {
        currentQuizIndex++;
        loadQuizQuestion();
    }, 1500);
}

function finishQuiz() {
    document.getElementById("quizGame").classList.add("hidden");
    document.getElementById("quizResult").classList.remove("hidden");

    // Calculate score
    const correctAnswersCount = quizAnswersRecorded.filter(a => a.status).length;
    const finalPercent = Math.round((correctAnswersCount / quizQuestions.length) * 100);

    // SVG Progress transition
    const circle = document.getElementById("resultCircle");
    const circumference = 2 * Math.PI * 45; // 282.7
    const offset = circumference - (finalPercent / 100) * circumference;
    circle.style.strokeDashoffset = offset;

    document.getElementById("resultPercentage").innerText = `${finalPercent}%`;
    document.getElementById("resultMessage").innerText = `Bạn đã trả lời đúng ${correctAnswersCount}/${quizQuestions.length} câu hỏi.`;

    const title = document.getElementById("resultTitle");
    if (finalPercent >= 80) {
        title.innerText = "Xuất sắc! 🎉";
        title.style.color = "#22c55e";
    } else if (finalPercent >= 50) {
        title.innerText = "Khá tốt! 👍";
        title.style.color = "var(--primary)";
    } else {
        title.innerText = "Cần cố gắng thêm! 💪";
        title.style.color = "#ef4444";
    }

    // Update Progress Data
    userProgress.quizzesTaken++;
    userProgress.quizScores.push(finalPercent);
    saveProgress();
    recordTodayActivity();
    initProgressDashboard();
    checkAchievements();
}

function resetQuizView() {
    document.getElementById("quizResult").classList.add("hidden");
    document.getElementById("quizSetup").classList.remove("hidden");
}

/* ==================== CONVERSATION ==================== */
function initConversationSection() {
    const buttons = document.querySelectorAll(".topic-btn");
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            buttons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentConvTopic = btn.getAttribute("data-conv");
            loadConversation();
        });
    });

    document.getElementById("playConversation").addEventListener("click", playFullConversation);
    document.getElementById("practiceConversation").addEventListener("click", startSpeakingPractice);

    loadConversation();
}

function loadConversation() {
    const list = CONVERSATION_DATA[currentConvTopic];
    const container = document.getElementById("conversationContainer");
    container.innerHTML = "";

    list.forEach(msg => {
        const card = document.createElement("div");
        card.className = `conv-message ${msg.speaker === 'B' ? 'right' : ''}`;

        card.innerHTML = `
            <div class="conv-avatar">${msg.speaker}</div>
            <div class="conv-bubble">
                <div class="conv-en">${msg.en}</div>
                <div class="conv-vi">${msg.vi}</div>
            </div>
        `;
        container.appendChild(card);
    });
}

function playFullConversation() {
    const utterances = CONVERSATION_DATA[currentConvTopic];
    if (!synth) return;

    if (synth.speaking) {
        synth.cancel();
        document.getElementById("playConversation").innerHTML = '<i class="fas fa-play"></i> Phát hội thoại';
        return;
    }

    document.getElementById("playConversation").innerHTML = '<i class="fas fa-stop"></i> Dừng phát';

    let index = 0;
    const playNext = () => {
        if (index >= utterances.length) {
            document.getElementById("playConversation").innerHTML = '<i class="fas fa-play"></i> Phát hội thoại';
            return;
        }

        const msg = utterances[index];
        const container = document.getElementById("conversationContainer");
        const messages = container.querySelectorAll(".conv-message");

        // Highlight active bubble
        messages.forEach(m => m.style.opacity = 0.5);
        messages[index].style.opacity = 1;
        messages[index].scrollIntoView({ behavior: "smooth", block: "nearest" });

        const utterance = new SpeechSynthesisUtterance(msg.en);
        utterance.lang = "en-US";
        utterance.rate = 0.9;

        utterance.onend = () => {
            index++;
            setTimeout(playNext, 800);
        };

        synth.speak(utterance);
    };

    playNext();
}

function startSpeakingPractice() {
    // Check speech recognition support
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        alert("Rất tiếc! Trình duyệt của bạn chưa hỗ trợ tính năng nhận diện giọng nói. Hãy dùng Google Chrome hoặc Edge để trải nghiệm tốt nhất nhé.");
        return;
    }

    const practiceBtn = document.getElementById("practiceConversation");
    practiceBtn.innerHTML = '<i class="fas fa-microphone-slash"></i> Đang lắng nghe...';
    practiceBtn.style.background = '#ef4444';

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();

    recognition.onresult = (event) => {
        const speechResult = event.results[0][0].transcript;
        alert(`Bạn vừa nói: "${speechResult}"\nTuyệt vời! Tiếp tục luyện tập nhé.`);
        recordTodayActivity();
    };

    recognition.onspeechend = () => {
        recognition.stop();
        practiceBtn.innerHTML = '<i class="fas fa-microphone"></i> Luyện nói';
        practiceBtn.style.background = 'var(--gradient)';
    };

    recognition.onerror = () => {
        recognition.stop();
        practiceBtn.innerHTML = '<i class="fas fa-microphone"></i> Luyện nói';
        practiceBtn.style.background = 'var(--gradient)';
    };
}

/* ==================== PROGRESS DASHBOARD ==================== */
function initProgressDashboard() {
    document.getElementById("learnedWords").innerText = userProgress.learnedWords.length;
    document.getElementById("quizzesTaken").innerText = userProgress.quizzesTaken;
    document.getElementById("streak").innerText = userProgress.streak;

    // Average score calculation
    if (userProgress.quizScores.length > 0) {
        const sum = userProgress.quizScores.reduce((a, b) => a + b, 0);
        const avg = Math.round(sum / userProgress.quizScores.length);
        document.getElementById("avgScore").innerText = `${avg}%`;
    } else {
        document.getElementById("avgScore").innerText = "0%";
    }

    renderActivityChart();
    renderAchievements();
}

function renderActivityChart() {
    const days = ["Hai", "Ba", "Tư", "Năm", "Sáu", "Bảy", "CN"];
    const chart = document.getElementById("activityChart");
    chart.innerHTML = "";

    const maxVal = Math.max(...userProgress.activity, 5); // Avoid division by zero, min height calculation baseline

    days.forEach((day, index) => {
        const val = userProgress.activity[index] || 0;
        const barHeight = (val / maxVal) * 100;

        const bar = document.createElement("div");
        bar.className = "chart-bar";
        bar.innerHTML = `
            <span class="chart-bar-value">${val > 0 ? val : ''}</span>
            <div class="chart-bar-fill" style="height: ${barHeight}%"></div>
            <span class="chart-bar-label">${day}</span>
        `;
        chart.appendChild(bar);
    });
}

function renderAchievements() {
    const grid = document.getElementById("achievementsGrid");
    grid.innerHTML = "";

    ACHIEVEMENTS_DATA.forEach(ach => {
        let isUnlocked = false;

        if (ach.type === "streak") {
            isUnlocked = userProgress.streak >= ach.target;
        } else if (ach.type === "vocab") {
            isUnlocked = userProgress.learnedWords.length >= ach.target;
        } else if (ach.type === "quiz") {
            isUnlocked = userProgress.quizzesTaken >= ach.target;
        }

        const card = document.createElement("div");
        card.className = `achievement-card ${isUnlocked ? 'unlocked' : 'locked'}`;

        card.innerHTML = `
            <div class="achievement-icon" style="${isUnlocked ? 'background: linear-gradient(135deg, #f5f7fa, #c3cfe2);' : 'background: #cbd5e1;'}">
                ${isUnlocked ? ach.icon : '🔒'}
            </div>
            <div class="achievement-info">
                <h4>${ach.title}</h4>
                <p>${ach.desc}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

function checkAchievements() {
    let newlyUnlocked = [];

    ACHIEVEMENTS_DATA.forEach(ach => {
        if (userProgress.unlockedAchievements.includes(ach.id)) return;

        let unlocked = false;
        if (ach.type === "streak" && userProgress.streak >= ach.target) unlocked = true;
        if (ach.type === "vocab" && userProgress.learnedWords.length >= ach.target) unlocked = true;
        if (ach.type === "quiz" && userProgress.quizzesTaken >= ach.target) unlocked = true;

        if (unlocked) {
            newlyUnlocked.push(ach);
            userProgress.unlockedAchievements.push(ach.id);
        }
    });

    if (newlyUnlocked.length > 0) {
        saveProgress();
        renderAchievements();

        // Show success animation or toast
        newlyUnlocked.forEach(ach => {
            alert(`🎉 Chúc mừng! Bạn vừa đạt được danh hiệu: "${ach.title}" - ${ach.desc}`);
        });
    }
}
