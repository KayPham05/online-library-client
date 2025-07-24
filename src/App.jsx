import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BookDetail from "./pages/BookDetail";
import UploadBook from "./pages/UploadBook";
import Login from "./pages/Login";

// App.jsx là file gốc, định nghĩa các route và layout chung
// Sử dụng Router để điều hướng giữa các trang

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<BookDetail />} />
        <Route path="/upload" element={<UploadBook />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
