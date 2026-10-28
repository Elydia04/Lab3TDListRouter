// Router configuration using React Router DOM
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import TodoList from "./pages/TodoList";
import Groups from "./pages/Groups";
import GroupTasks from "./pages/GroupTasks";
import Guide from "./pages/Guide";
import Developers from "./pages/Developers";
import Home from "./pages/Home";

// Define all routes for the application
const router = createBrowserRouter([
  { path: "/", element: <Dashboard /> }, // Default route - Dashboard
  { path: "/dashboard", element: <Dashboard /> }, // Dashboard route
  { path: "/Dashboard", element: <Dashboard /> }, // Dashboard route (case-insensitive support)
  { path: "/home", element: <Home /> }, // Home/Landing page
  { path: "/todo", element: <TodoList /> }, // Main To-Do List interface
  { path: "/groups", element: <Groups /> }, // Task Groups/Categories page
  { path: "/groups/:groupId", element: <GroupTasks /> }, // Dynamic route for tasks in a specific group
  { path: "/guide", element: <Guide /> }, // Instructions/User Guide page
  { path: "/developers", element: <Developers /> }, // Developers page
]);

export default router;