import { useState } from "react";
import Layout from "../components/Layout";
import { useTodo } from "../context/useTodo";

const TodoList = () => {
  const { tasks, addTask, toggleTaskStatus, deleteTask, clearAllTasks } =
    useTodo();
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    addTask(inputValue);
    setInputValue("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTask(e);
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            To-Do List Interface
          </h1>

          <form onSubmit={handleAddTask} className="flex gap-2 mb-6">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter a new task..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Add Task
            </button>
            {tasks.length > 0 && (
              <button
                type="button"
                onClick={clearAllTasks}
                className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors"
              >
                Clear All
              </button>
            )}
          </form>

          <div className="space-y-3">
            {tasks.length === 0 ? (
              <p className="text-gray-500 text-center py-8">
                No tasks yet. Add a task to get started!
              </p>
            ) : (
              tasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-md bg-gray-50"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        task.status === "done"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {task.status === "done" ? "Done" : "Not Done"}
                    </span>
                    <span
                      className={`text-gray-900 ${
                        task.status === "done"
                          ? "line-through text-gray-500"
                          : ""
                      }`}
                    >
                      {task.text}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => toggleTaskStatus(task.id)}
                      className={`px-4 py-1 rounded-md text-white text-sm ${
                        task.status === "done"
                          ? "bg-yellow-600 hover:bg-yellow-700"
                          : "bg-green-600 hover:bg-green-700"
                      } transition-colors`}
                    >
                      {task.status === "done" ? "Mark Not Done" : "Mark Done"}
                    </button>
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="bg-red-600 text-white px-4 py-1 rounded-md text-sm hover:bg-red-700 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TodoList;
