// Main entry point of the React application
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import { TodoProvider } from "./context/TodoContext";

// Wrap the app with TodoProvider so all components can access shared task/group state
// RouterProvider enables navigation between different pages
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodoProvider>
      <RouterProvider router={router} />
    </TodoProvider>
  </StrictMode>
);
