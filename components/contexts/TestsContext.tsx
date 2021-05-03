import React, { useState } from "react";
import { Test } from "../../lib/resources/test";

export const TestsContext = React.createContext(undefined);

export const TestsProvider = ({ children }) => {
  const [tests, setTests] = useState<Test[]>([]);

  return (
    <TestsContext.Provider value={{ tests: tests, setTests: setTests }}>
      {children}
    </TestsContext.Provider>
  );
};
