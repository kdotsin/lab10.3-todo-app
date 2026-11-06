import { useTodos } from "./context/TodoContext";

function App() {
  const { todos, addTodo } = useTodos();
  return (
    <div>
      <button onClick={() => addTodo("test")}>add</button>
      <button onClick={() => addTodo("   ")}>add blank</button>
      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </div>
  );
}

export default App;
