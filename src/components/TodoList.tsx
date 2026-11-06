import { useTodos } from "../context/TodoContext";
import { TodoItem } from "./TodoItem";

export function TodoList() {
  const { todos } = useTodos();

  if (todos.length === 0) {
    return <p>No todos yet! Add one above.</p>;
  }

  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
