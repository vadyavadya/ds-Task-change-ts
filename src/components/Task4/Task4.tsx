import React, { useState, useContext, createContext, ReactNode } from "react";

interface ThemeContextType {
  theme: string,
  toggleTheme: () => void,
}

interface providerProps {
  children:ReactNode,
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider: React.FC<providerProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>('light')

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

function ToggleProvider() {
  const context = useContext(ThemeContext);

  if (!context) {
    return <h1>No context</h1>
  }

  const { theme, toggleTheme } = context;

  return (
    <ThemeProvider>
      <div>
        <p>Theme: {theme}</p>
        <button onClick={toggleTheme}>Toggle</button>
      </div>
    </ThemeProvider>
  )
}

const Task4: React.FC = () => {
  
  return (
    <ThemeProvider>
      <ToggleProvider/>
    </ThemeProvider>
  )
}

export default Task4;