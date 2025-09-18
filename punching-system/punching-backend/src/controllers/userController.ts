import { Request, Response } from "express";
import { readUsers, writeUsers } from "../utils/fileHandler";

import { IUser } from "../model/userModel";


export const registerUser = (req: Request, res: Response) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: "Name required" });

  const users: IUser[] = readUsers();
  const existing = users.find((user) => user.name === name);

  if (existing) {
    return res.json({
      message: "User already registered",
      userId: existing.userId,
    });
  }

  const userId = Date.now().toString();
  const newUser: IUser = { userId, name };
  users.push(newUser);
  writeUsers(users);

  return res.status(201).json({ message: "User registered", userId });
};
