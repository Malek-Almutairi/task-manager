import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskList from "../components/tasks/TaskList";
import TaskForm from "../components/tasks/TaskForm";

export default function Dashboard() {
  const { tasks, addTask, editTask, removeTask } = useContext(TaskContext);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Task Dashboard</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onEditTask={editTask} onRemoveTask={removeTask} />
    </div>
  );
}
