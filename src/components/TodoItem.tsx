import { useState } from "react";
import type { KeyboardEvent } from "react";
import type { Todo } from "../types";
import { useTodos } from "../context/TodoContext";

export function TodoItem({ todo }: { todo: Todo }) {
  const { toggleTodo, deleteTodo, editTodo } = useTodos();
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(todo.text);

  const startEditing = () => {
    setDraft(todo.text);
    setIsEditing(true);
  };

  const save = () => {
    editTodo(todo.id, draft);
    setIsEditing(false);
  };

  const cancel = () => setIsEditing(false);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") save();
    if (e.key === "Escape") cancel();
  };

  return (
    <li className="flex items-center justify-between gap-2 rounded border px-3 py-2">
      {isEditing ? (
        <input
          autoFocus
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 rounded border px-2 py-1"
        />
      ) : (
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <span className={todo.completed ? "line-through text-gray-400" : ""}>
            {todo.text}
          </span>
        </label>
      )}
      <div className="flex gap-2">
        {!isEditing && <button onClick={startEditing}>Edit</button>}
        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-red-600"
          aria-label={`Delete ${todo.text}`}
        >
          Delete
        </button>
      </div>
    </li>
  );
}