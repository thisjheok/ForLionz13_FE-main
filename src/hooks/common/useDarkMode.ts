import { useEffect, useState } from "react";
import { ColorTheme, darkTheme, lightTheme } from "../../styles/theme/theme";

export function useDarkMode() {
  const [colorTheme, setColorTheme] = useState<ColorTheme>(lightTheme);

  const setMode = (mode: ColorTheme) => {
    if (mode === lightTheme) {
      window.localStorage.setItem("theme", "light");
    } else if (mode === darkTheme) {
      window.localStorage.setItem("theme", "dark");
    }
    setColorTheme(mode);
  };

  useEffect(() => {
    const theme = window.localStorage.getItem("theme");
    if (theme) {
      theme === "light" ? setColorTheme(lightTheme) : setColorTheme(darkTheme);
    }
  });

  const toggleColorTheme = () => {
    colorTheme === lightTheme ? setMode(darkTheme) : setMode(lightTheme);
  };

  return { colorTheme, toggleColorTheme };
}
