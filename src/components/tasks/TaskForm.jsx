import { useState } from "react";
export default function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask({ title, description, dueDate, completed: false });
    setTitle("");
    setDescription("");
    setDueDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 max-w-md">
      <h2 className="text-xl mb-2">Add a Task</h2>
      <div className="mb-2">
        <label>Title</label>
        <input
          className="border w-full px-2 py-1"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-2">
        <label>Description</label>
        <textarea
          className="border w-full px-2 py-1"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label>Due Date</label>
        <input
          className="border w-full px-2 py-1"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>
      <button className="bg-green-500 text-white px-4 py-2" type="submit">
        Add Task
      </button>
    </form>
  );
}
