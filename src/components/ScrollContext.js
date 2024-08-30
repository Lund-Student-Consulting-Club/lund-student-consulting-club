import React, { createContext, useRef } from 'react';

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const aboutSectionRef = useRef(null);
  const footerSectionRef = useRef(null)
  return (
    <ScrollContext.Provider value={{ aboutSectionRef, footerSectionRef }}>
      {children}
    </ScrollContext.Provider>
  );
};