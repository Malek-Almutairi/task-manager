const mockUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    password: "password123",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    password: "password456",
  },
];

export function loginUser({ email, password }) {
  const user = mockUsers.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    // Normally you’d store a token, here we store user info
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    return user;
  }
  return null;
}

export function registerUser({ name, email, password }) {
  const newUser = {
    id: mockUsers.length + 1,
    name,
    email,
    password,
  };
  mockUsers.push(newUser);
  return newUser;
}

export function getCurrentUser() {
  const stored = localStorage.getItem("loggedInUser");
  return stored ? JSON.parse(stored) : null;
}

export function logoutUser() {
  localStorage.removeItem("loggedInUser");
}
