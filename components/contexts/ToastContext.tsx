import { createContext, useState } from "react";

export const ToastContext = createContext(null);

export const ToastProvider = ({ children }) => {
  const [message, setMessage] = useState<string>("");

  return (
    <ToastContext.Provider value={{ message: message, setMessage: setMessage }}>
      {children}
    </ToastContext.Provider>
  );
};
