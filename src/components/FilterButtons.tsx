import { useFilter } from "../context/FilterContext";
import type { Filter } from "../types";

const FILTERS: Filter[] = ["all", "active", "completed"];

export function FilterButtons() {
  const { filter, setFilter } = useFilter();

  return (
    <div className="flex gap-2">
      {FILTERS.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          aria-pressed={filter === f}
          className={`rounded border px-3 py-1 capitalize ${
            filter === f ? "bg-blue-600 text-white" : ""
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}