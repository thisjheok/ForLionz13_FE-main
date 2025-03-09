import { ReactNode, createContext } from "react";
import { darkTheme } from "../../styles/theme/theme";
import { useDarkMode } from "../../hooks";

interface ContextProps {
  isDark: boolean;
  toggleColorTheme: () => void;
}

export const ThemeContext = createContext<ContextProps>({
  isDark: false,
  toggleColorTheme: () => {
    return null;
  },
});

function ThemeContextProvider({ children }: { children: ReactNode }) {
  const { colorTheme, toggleColorTheme } = useDarkMode();

  let isDark = false;
  if (colorTheme === darkTheme) {
    isDark = true;
  }
  return (
    <ThemeContext.Provider value={{ isDark, toggleColorTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContextProvider };
