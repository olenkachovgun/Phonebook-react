import { useEffect, useState } from "react";

const THEME_KEY = "theme";

export default function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(THEME_KEY) || "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = document.getElementById("root");
    document.body.classList.remove("light-theme", "dark-theme");
    root?.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(`${theme}-theme`);
    root?.classList.add(`${theme}-theme`);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
}
