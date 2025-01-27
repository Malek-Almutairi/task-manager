import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onEditTask, onRemoveTask }) {
  return (
    <div>
      <h2 className="text-xl mb-2">All Tasks</h2>
      <div className="space-y-2">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onEditTask={onEditTask}
            onRemoveTask={onRemoveTask}
          />
        ))}
      </div>
    </div>
  );
}
