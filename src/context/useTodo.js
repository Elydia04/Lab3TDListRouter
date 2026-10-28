import { useContext } from "react";
import { TodoContext } from "./TodoContextValue";

// Custom hook to access TodoContext
// Safety check ensures hook is only used within TodoProvider
export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
};
