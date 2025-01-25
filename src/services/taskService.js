let mockTasks = [
  {
    id: 1,
    title: "Buy groceries",
    description: "Milk, bread, eggs",
    dueDate: "2025-01-31",
    completed: false,
  },
  {
    id: 2,
    title: "Finish project",
    description: "Work on the React project",
    dueDate: "2025-02-05",
    completed: false,
  },
];

export function getTasks() {
  return mockTasks;
}

export function createTask(task) {
  const newTask = { id: Date.now(), ...task };
  mockTasks.push(newTask);
  return newTask;
}

export function updateTask(updatedTask) {
  mockTasks = mockTasks.map((task) =>
    task.id === updatedTask.id ? updatedTask : task
  );
  return updatedTask;
}

export function deleteTask(taskId) {
  mockTasks = mockTasks.filter((task) => task.id !== taskId);
  return mockTasks;
}
