import { useTodos } from "../context/TodoContext";
import type { Todo } from "../types";

export function TodoItem({ todo }: { todo: Todo }) {
  const { toggleTodo, deleteTodo } = useTodos();

  return (
    <li className="rounded border px-3 py-2">
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
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-600"
        aria-label={`Delete ${todo.text}`}
      >
        Delete
      </button>
    </li>
  );
}
