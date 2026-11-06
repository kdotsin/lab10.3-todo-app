import { useTheme } from "../context/ThemeContext";
import { themeStyles } from "../styles";

export function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`rounded border px-3 py-1 ${themeStyles[theme].button}`}
    >
      {theme === "light" ? "🌙 Switch to Dark" : "☀️ Switch to Light"}
    </button>
  );
}