import { FilterButtons } from './components/FilterButtons';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { useTodos } from './context/TodoContext';

export default function App() {
  const { todos } = useTodos();
  return (
    <div className="mx-auto max-w-xl space-y-4 p-6">
      <h1 className="text-2xl font-bold">Todo App (Context API)</h1>
      <TodoInput />
      <FilterButtons />
      <TodoList />
      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </div>
  );
}