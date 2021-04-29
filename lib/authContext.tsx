import React, { useState, useEffect } from "react";
import firebase from "./init"
import { User } from "@firebase/auth-types"

type Props = {
  currentUser: User | null | undefined
}

export const AuthContext = React.createContext<Props>({ currentUser: undefined});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser: user }}>
      {children}
    </AuthContext.Provider>
  );
};
