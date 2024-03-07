import React, { useContext, createContext, useState } from 'react';
import { ColorContext } from "../context/ColorContext"

// Define the context
const ColorContext = createContext();

// This is your custom hook that components will use to access the context
export const useColor = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error('useColor must be used within a ColorProvider');
  }
  return context;
};

// This is the provider component that you'll wrap your app or component tree in
export const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('#0000FF'); // Initialize with a default color

  // The value prop of the provider will provide the current context value to its children
  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  );
};
