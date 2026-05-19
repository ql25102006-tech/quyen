// File này quản lý cấu hình kết nối Supabase của bạn.
// Bạn cần thay thế SUPABASE_URL và SUPABASE_ANON_KEY bằng thông tin từ Supabase Dashboard của bạn.

const SUPABASE_URL = "YOUR_SUPABASE_URL";
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";

// Khởi tạo Supabase client từ CDN (nếu đã import Supabase JS library qua thẻ script)
let supabaseClient = null;

function initSupabase() {
    if (supabaseClient) return supabaseClient;

    // Khi dùng CDN, đối tượng toàn cục có tên là 'supabase'
    const globalSupabase = window.supabase || (typeof supabase !== 'undefined' ? supabase : null);

    if (globalSupabase && typeof globalSupabase.createClient === 'function') {
        try {
            supabaseClient = globalSupabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
            return supabaseClient;
        } catch (e) {
            console.error("Lỗi khi khởi tạo Supabase Client:", e);
        }
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
