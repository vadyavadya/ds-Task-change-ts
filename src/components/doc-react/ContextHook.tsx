import { createContext, useContext, useState } from "react";

type ThemeType = 'light' | 'dark' | 'system'

type ThemeContextType = { theme: ThemeType, changeTheme: (theme: ThemeType) => void };


const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const useGetTheme = () => useContext(ThemeContext);

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>('dark');

  return (
    <ThemeContext.Provider value={{ theme, changeTheme: (v) => setTheme(v) }}>
      {children}
    </ThemeContext.Provider>
  )
}


function Block1() {
  const context = useGetTheme();

  if (!context) {
    return <>No Context</>
  }

  const { theme, changeTheme } = context

  const setDark = () => changeTheme('dark')
  const setLight = () => changeTheme("light")
  const setSystem = () => changeTheme("system")

  return (
    <div>
      <p>Current theme:{theme}</p>
      <div className="">
        <label >
          <input type="radio" name="theme" id="dark" value='dark' checked={theme === 'dark'} onChange={setDark} />
          Dark
        </label>
        <label >
          <input type="radio" name="theme" id="light" value='light' checked={theme === 'light'} onChange={setLight} />
          light
        </label>
        <label >
          <input type="radio" name="theme" id="system" value='system' checked={theme === 'system'} onChange={setSystem} />
          system
        </label>
      </div>
    </div>
  )
}


export default function ContextHook() {
  return (
    <div>
      <ThemeProvider>
        <Block1 />
      </ThemeProvider>
    </div>
  )
}