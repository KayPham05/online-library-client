import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// main.jsx là file khởi tạo ứng dụng React
// Render App vào #root trong public/index.html

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
