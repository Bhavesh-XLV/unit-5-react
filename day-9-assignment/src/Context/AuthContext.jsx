import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [status, setStatus] = useState(false);
  const [show, setShow] = useState(true);

  const handleToggle = () => {
    setStatus(!status);
    setShow(!show);
  };

  return (
    <AuthContext.Provider value={{ show, status, handleToggle }}>
      {children}
    </AuthContext.Provider>
  );
};
