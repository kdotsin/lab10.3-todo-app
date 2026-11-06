import { TodoInput } from "./components/TodoInput";
import { useTodos } from "./context/TodoContext";

function App() {
  const { todos } = useTodos();
  return (
    <div>
      <TodoInput />
      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </div>
  );
}

export default App;
