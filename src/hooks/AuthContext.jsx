import { createContext, useContext, useState } from "react";

/**
 * Authentication Context
 *
 * Provides a simple global authentication state for the application.
 * This is a lightweight placeholder system meant for UI demonstration,
 * not for production.
 *
 * - AuthProvider: Wraps the application and exposes authentication state.
 * - useAuth(): Custom hook to access the auth context values.
 * - loggedIn: Boolean indicating whether the user is logged in.
 * - login(): Sets loggedIn to true.
 * - logout(): Sets loggedIn to false.
 */

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const login = () => setLoggedIn(true);
  const logout = () => setLoggedIn(false);

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
