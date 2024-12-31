import React, { createContext, useState } from 'react';

// Step 1: Create Context
export const UserContext = createContext();

// Step 2: Create Provider 
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: 'Aswathi', age: 22 });

  const updateUser = (newData) => {
    setUser((prev) => ({ ...prev, ...newData }));
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
