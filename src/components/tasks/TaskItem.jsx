import { useState } from "react";

export default function TaskItem({ task, onEditTask, onRemoveTask }) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(task.dueDate);

  const handleSave = () => {
    onEditTask({ ...task, title, description, dueDate });
    setEditing(false);
  };

  const toggleCompletion = () => {
    onEditTask({ ...task, completed: !task.completed });
  };

  return (
    <div className="border p-2 flex flex-col sm:flex-row justify-between items-start sm:items-center">
      {editing ? (
        <div className="flex-1 mb-2 sm:mb-0">
          <input
            className="border px-2 py-1 w-full mb-1"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="border px-2 py-1 w-full mb-1"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            className="border px-2 py-1 w-full"
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
      ) : (
        <div className="flex-1">
          <h3
            className={`text-lg font-bold ${task.completed && "line-through"}`}
          >
            {task.title}
          </h3>
          <p className={`${task.completed && "line-through"}`}>
            {task.description}
          </p>
          <p>Due: {task.dueDate}</p>
        </div>
      )}

      <div className="mt-2 sm:mt-0 flex space-x-2">
        <button
          className="bg-blue-500 text-white px-2 py-1"
          onClick={toggleCompletion}
        >
          {task.completed ? "Unmark" : "Complete"}
        </button>
        {editing ? (
          <button
            className="bg-green-500 text-white px-2 py-1"
            onClick={handleSave}
          >
            Save
          </button>
        ) : (
          <button
            className="bg-yellow-500 text-white px-2 py-1"
            onClick={() => setEditing(true)}
          >
            Edit
          </button>
        )}
        <button
          className="bg-red-500 text-white px-2 py-1"
          onClick={() => onRemoveTask(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
