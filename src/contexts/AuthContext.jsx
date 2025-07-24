import React, { createContext, useState } from "react";

// AuthContext: Lưu trạng thái đăng nhập, thông tin người dùng, token, ...
// Sử dụng React Context API để chia sẻ trạng thái toàn app

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};
