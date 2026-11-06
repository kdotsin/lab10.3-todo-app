import type { ReactNode } from 'react';
import { ThemeProvider } from './ThemeContext';
import { TodoProvider } from './TodoContext';

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <TodoProvider>{children}</TodoProvider>
    </ThemeProvider>
  );
}