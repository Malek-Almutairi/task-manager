import { createContext, useState, useEffect } from "react";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../services/taskService";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Load tasks from service
    const data = getTasks();
    setTasks(data);
  }, []);

  const addTask = (task) => {
    const newTask = createTask(task);
    setTasks([...tasks, newTask]);
  };

  const editTask = (updatedTask) => {
    updateTask(updatedTask);
    setTasks(tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
  };

  const removeTask = (taskId) => {
    deleteTask(taskId);
    setTasks(tasks.filter((t) => t.id !== taskId));
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, editTask, removeTask, setTasks }}
    >
      {children}
    </TaskContext.Provider>
  );
}
