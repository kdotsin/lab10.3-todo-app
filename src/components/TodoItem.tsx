import type { Todo } from '../types';

export function TodoItem({ todo }: { todo: Todo }) {
  return <li className="rounded border px-3 py-2">{todo.text}</li>;
}