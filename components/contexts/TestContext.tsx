import React, { useState } from "react";
import { Test } from "../../lib/resources/test";

export const SelectedTestContext = React.createContext(undefined);

export const SelectedTestProvider = ({ children }) => {
  const [selectedTest, setSelectedTest] = useState<Test>(null);

  return (
    <SelectedTestContext.Provider
      value={{ selectedTest: selectedTest, setSelectedTest: setSelectedTest }}
    >
      {children}
    </SelectedTestContext.Provider>
  );
};
