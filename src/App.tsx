import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import { useTodos } from "./context/TodoContext";

function App() {
  const { todos } = useTodos();
  return (
    <div>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
