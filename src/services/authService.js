import axios from "axios";

// authService.js: Chứa các hàm gọi API xác thực người dùng
// Đăng nhập, đăng ký, xác thực token, ...

const API_URL = import.meta.env.VITE_API_URL + "/auth";

export const login = (data) => axios.post(`${API_URL}/login`, data);
export const register = (data) => axios.post(`${API_URL}/register`, data);
// Thêm các hàm khác nếu cần
