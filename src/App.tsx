import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';

export default function App() {
  return (
    <div className="mx-auto max-w-xl space-y-4 p-6">
      <h1 className="text-2xl font-bold">Todo App (Context API)</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}