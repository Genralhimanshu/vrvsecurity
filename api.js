export const fetchUsers = () =>
    Promise.resolve([
      { id: 1, name: "Alice", email: "alice@example.com", role: "Admin" },
      { id: 2, name: "Bob", email: "bob@example.com", role: "Editor" },
    ]);
  
  export const fetchRoles = () =>
    Promise.resolve([
      { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
      { id: 2, name: "Editor", permissions: ["Read", "Write"] },
    ]);
  