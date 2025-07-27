// Tipe Role
export type UserRole = "guest" | "eksplorer" | "warlok";

// Interface User
export interface User {
  email: string;
  password: string;
  role: UserRole;
  isLoggedIn: boolean;
}

// Default Guest
export const guestUser: User = {
  email: "",
  password: "",
  role: "guest",
  isLoggedIn: false,
};

// Dummy Eksplorer
export const eksplorerUser: User = {
  email: "eksplorer@email.com",
  password: "explore123",
  role: "eksplorer",
  isLoggedIn: true,
};

// Dummy Warlok
export const warlokUser: User = {
  email: "warlok@email.com",
  password: "warlok123",
  role: "warlok",
  isLoggedIn: true,
};

// Multi user array (optional, kalau mau simulasi database)
export const users: User[] = [eksplorerUser, warlokUser];

// Fungsi login sederhana (match email+password)
export function loginDummyUser(email: string, password: string): User | null {
  if (email === eksplorerUser.email && password === eksplorerUser.password) {
    return { ...eksplorerUser, isLoggedIn: true };
  }
  if (email === warlokUser.email && password === warlokUser.password) {
    return { ...warlokUser, isLoggedIn: true };
  }
  return null; // login gagal
}
