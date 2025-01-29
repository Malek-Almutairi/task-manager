import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskList from "../components/tasks/TaskList";
import TaskForm from "../components/tasks/TaskForm";

export default function Dashboard() {
  const { tasks, addTask, editTask, removeTask } = useContext(TaskContext);

  const [filter, setFilter] = useState("all");
  const [sortType, setSortType] = useState("creationDate");
  const [searchTerm, setSearchTerm] = useState("");

  const searchedTasks = sortedTasks.filter(
    (task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortType(event.target.value);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  const sortedTasks = filteredTasks.slice().sort((a, b) => {
    if (sortType === "dueDate") {
      return new Date(a.dueDate) - new Date(b.dueDate);
    } else if (sortType === "creationDate") {
      return a.id - b.id;
    }
    return 0;
  });

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Task Dashboard</h1>
      <input
        type="text"
        placeholder="Search tasks"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border px-2 py-1 mb-4"
      />

      <div className="flex mb-4">
        <select
          value={filter}
          onChange={handleFilterChange}
          className="border px-2 py-1 mr-2"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>

        <select
          value={sortType}
          onChange={handleSortChange}
          className="border px-2 py-1"
        >
          <option value="creationDate">Creation Date</option>
          <option value="dueDate">Due Date</option>
        </select>
      </div>
      <TaskList tasks={searchedTasks}></TaskList>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onEditTask={editTask} onRemoveTask={removeTask} />
    </div>
  );
}
