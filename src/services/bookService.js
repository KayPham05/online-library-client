import axios from "axios";

// bookService.js: Chứa các hàm gọi API liên quan đến sách
// Sử dụng axios để gửi request đến backend

const API_URL = import.meta.env.VITE_API_URL + "/books";

export const getBooks = () => axios.get(API_URL);
export const getBookById = (id) => axios.get(`${API_URL}/${id}`);
export const uploadBook = (data) => axios.post(API_URL, data);
// Thêm các hàm khác nếu cần
