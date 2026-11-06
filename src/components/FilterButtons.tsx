import { useFilter } from "../context/FilterContext";
import type { Filter } from "../types";
import { useTheme } from "../context/ThemeContext";
import { themeStyles } from "../styles";

const FILTERS: Filter[] = ["all", "active", "completed"];

export function FilterButtons() {
  const { filter, setFilter } = useFilter();
  const { theme } = useTheme();
  const s = themeStyles[theme];
  return (
    <div className="flex gap-2">
      {FILTERS.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          aria-pressed={filter === f}
          className={`rounded border px-3 py-1 capitalize ${
            filter === f ? "bg-blue-600 border-blue-600 text-white" : s.button
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
