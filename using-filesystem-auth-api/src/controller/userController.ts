import fs from "fs";
import path from "path";
import { User } from "../types/types";

const filePath = path.join(__dirname, "..", "users.json");

export const getUsers = (): User[] => {
  if (!fs.existsSync(filePath)) return [];
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data || "[]");
};

export const saveUsers = (users: User[]) => {
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
};

export const addUser = (
  email: string,
  password: string,
  role: "user" | "admin"
): User => {
  const users = getUsers();

  if (!email.endsWith("@gmail.com"))
    throw new Error("Only Gmail accounts allowed");

  const exists = users.find((u) => u.email === email);
  if (exists)
    throw new Error("User already exists");


  const newUser: User = {
    id: Date.now(),
    email,
    password,
    role,
    isLoggedIn: false,
  };
  users.push(newUser);
  saveUsers(users);
  return newUser;
};


export const signUp = (email: string, password: string): User => {
  return addUser(email, password, "user");
};


export const signIn = (email: string, password: string): User => {
  const users = getUsers();

  const userIndex = users.findIndex(
    (u) => u.email === email && u.password === password
  );

  if (userIndex === -1)
    throw new Error("Invalid email or password");

  if (users[userIndex].isLoggedIn) {
    throw new Error("Already LoggedIn, Please Login...");
  }

  users[userIndex].isLoggedIn = true;
  saveUsers(users);
  return users[userIndex];
};


export const signOut = (email: string): User => {
  const users = getUsers();
  const userIndex = users.findIndex((u) => u.email === email);
  if (userIndex === -1)
    throw new Error("User not found");

  

  users[userIndex].isLoggedIn = false;
  saveUsers(users);
  return users[userIndex];
};



export const isLoggedIn = (email: string): boolean => {
  const users = getUsers();
  const user = users.find((u) => u.email === email);
  return !!user?.isLoggedIn;
};
