import { createContext, useState, useEffect } from "react";
import {
  getCurrentUser,
  loginUser,
  logoutUser,
  registerUser,
} from "../services/authService";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (currentUser) setUser(currentUser);
  }, []);

  const handleLogin = async (email, password) => {
    const loggedInUser = loginUser({ email, password });
    if (loggedInUser) setUser(loggedInUser);
    return loggedInUser;
  };

  const handleRegister = async (name, email, password) => {
    const newUser = registerUser({ name, email, password });
    if (newUser) setUser(newUser);
    return newUser;
  };

  const handleLogout = () => {
    logoutUser();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, handleLogin, handleRegister, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
