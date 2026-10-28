// Context for managing tasks and groups globally across the app
import { useState } from "react";
import { TodoContext } from "./TodoContextValue";

// Provider component that wraps the entire app to share state
export const TodoProvider = ({ children }) => {
  // State for all tasks - shared across all pages
  const [tasks, setTasks] = useState([]);
  
  // State for task groups/categories - pre-set with default groups
  const [groups, setGroups] = useState([
    { id: "school", name: "School Activities" },
    { id: "personal", name: "Personal Tasks" },
    { id: "projects", name: "Projects" },
    { id: "daily", name: "Daily Tasks" },
  ]);

  // Add a new task - can be added to general list or to a specific group
  const addTask = (text, groupId = null) => {
    if (text.trim() === "") return; // Don't add empty tasks
    const newTask = {
      id: Date.now(), // Use timestamp as unique ID
      text: text.trim(),
      status: "not done", // Default status
      groupId, // null means it's in general todo list
      createdAt: new Date().toISOString(),
    };
    // Add new task to the existing tasks array
    setTasks((prev) => [...prev, newTask]);
  };

  // Toggle task status between "done" and "not done"
  const toggleTaskStatus = (taskId) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId
          ? { ...task, status: task.status === "done" ? "not done" : "done" }
          : task
      )
    );
  };

  // Delete a task from the list
  const deleteTask = (taskId) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  // Clear all tasks at once
  const clearAllTasks = () => {
    setTasks([]);
  };

  // Add a new custom group/category
  const addGroup = (name) => {
    if (name.trim() === "") return; // Don't add empty groups
    const newGroup = {
      // Convert name to URL-friendly ID (e.g., "My Tasks" -> "my-tasks")
      id: name.toLowerCase().replace(/\s+/g, "-"),
      name: name.trim(),
    };
    setGroups((prev) => [...prev, newGroup]);
  };

  // Delete a group and all tasks that belong to it
  const deleteGroup = (groupId) => {
    setGroups((prev) => prev.filter((group) => group.id !== groupId));
    setTasks((prev) => prev.filter((task) => task.groupId !== groupId));
  };

  // Get only tasks that belong to a specific group
  const getTasksByGroup = (groupId) => {
    return tasks.filter((task) => task.groupId === groupId);
  };

  // Calculate task statistics for the dashboard
  const getTaskStats = () => {
    const total = tasks.length;
    const completed = tasks.filter((task) => task.status === "done").length;
    const pending = total - completed;
    return { total, completed, pending };
  };

  // Bundle all functions and state to share with components
  const value = {
    tasks,
    groups,
    addTask,
    toggleTaskStatus,
    deleteTask,
    clearAllTasks,
    addGroup,
    deleteGroup,
    getTasksByGroup,
    getTaskStats,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
