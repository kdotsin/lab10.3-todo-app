import { useState } from "react";
import type { FormEvent } from "react";
import { useTodos } from "../context/TodoContext";
import { useTheme } from "../context/ThemeContext";
import { themeStyles } from "../styles";

export function TodoInput() {
  const [text, setText] = useState("");
  const { addTodo } = useTodos();
  const { theme } = useTheme();
  const s = themeStyles[theme];

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    addTodo(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
        className={`flex-1 rounded border px-3 py-2 ${s.input}`}
      />
      <button
        type="submit"
        className="rounded bg-blue-600 px-4 py-2 text-white"
      >
        Add Todo
      </button>
    </form>
  );
}
