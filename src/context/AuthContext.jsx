import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Roberto", role: "admin" }); 
  // Cambia "admin" a "user" para probar diferentes vistas

  const loginAs = (role) => setUser({ name: "Roberto", role });

  return (
    <AuthContext.Provider value={{ user, loginAs }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
