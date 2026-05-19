// File này quản lý cấu hình kết nối Supabase của bạn.
// Bạn cần thay thế SUPABASE_URL và SUPABASE_ANON_KEY bằng thông tin từ Supabase Dashboard của bạn.

const SUPABASE_URL = "YOUR_SUPABASE_URL";
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";

// Khởi tạo Supabase client từ CDN (nếu đã import Supabase JS library qua thẻ script)
let supabaseClient = null;

function initSupabase() {
    // 1. Kiểm tra xem người dùng đã cấu hình Key thật chưa
    if (SUPABASE_URL === "YOUR_SUPABASE_URL" || SUPABASE_ANON_KEY === "YOUR_SUPABASE_ANON_KEY") {
        console.warn("CẢNH BÁO: Bạn chưa thiết lập URL và Anon Key của dự án Supabase trong file 'supabase-client.js'!");
        return null;
    }

    if (supabaseClient) return supabaseClient;

    // Khi dùng CDN, đối tượng toàn cục có tên là 'supabase'
    const globalSupabase = window.supabase || (typeof window.supabase !== 'undefined' ? window.supabase : null);

    if (globalSupabase && typeof globalSupabase.createClient === 'function') {
        try {
            // Kiểm tra tính hợp lệ của định dạng URL
            if (!SUPABASE_URL.startsWith("http://") && !SUPABASE_URL.startsWith("https://")) {
                console.error("Lỗi: SUPABASE_URL phải bắt đầu bằng http:// hoặc https://");
                return null;
            }
            supabaseClient = globalSupabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
            return supabaseClient;
        } catch (e) {
            console.error("Lỗi khi khởi tạo Supabase Client:", e);
        }
    } else {
        console.error("Lỗi: Thư viện Supabase JS chưa được tải thành công từ CDN.");
    }
    return null;
}

// Khởi tạo ngay lập tức
initSupabase();

// Hàm lấy Supabase Client
function getSupabaseClient() {
    if (supabaseClient) return supabaseClient;
    return initSupabase();
}
