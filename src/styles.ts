import type { Theme } from "./types";

interface ThemeStyles {
  app: string;
  card: string;
  input: string;
  button: string;
}

export const themeStyles: Record<Theme, ThemeStyles> = {
  light: {
    app: "bg-white text-gray-900",
    card: "bg-white border-gray-300",
    input: "bg-white text-gray-900 border-gray-300 placeholder-gray-400",
    button: "bg-gray-100 text-gray-900 border-gray-300 hover:bg-gray-200",
  },
  dark: {
    app: "bg-gray-900 text-gray-100",
    card: "bg-gray-800 border-gray-700",
    input: "bg-gray-800 text-gray-100 border-gray-600 placeholder-gray-500",
    button: "bg-gray-800 text-gray-100 border-gray-600 hover:bg-gray-700",
  },
};