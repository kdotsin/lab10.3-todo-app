import type { ReactNode } from 'react';
import { ThemeProvider } from './ThemeContext';
import { TodoProvider } from './TodoContext';
import { FilterProvider } from './FilterContext';

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <TodoProvider>
        <FilterProvider>{children}</FilterProvider>
      </TodoProvider>
    </ThemeProvider>
  );
}