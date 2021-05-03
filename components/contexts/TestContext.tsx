import firebase from "firebase";
import React, { useState } from "react";
import { Test } from "../../lib/resources/test";

export const SelectedTestContext = React.createContext(null);

export const SelectedTestProvider = ({ children }) => {
  const [selectedTest, setSelectedTest] = useState<Test>();

  return (
    <SelectedTestContext.Provider
      value={{ selectedTest: selectedTest, setSelectedTest: setSelectedTest }}
    >
      {children}
    </SelectedTestContext.Provider>
  );
};
