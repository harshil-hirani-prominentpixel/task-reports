import { Request, Response } from "express";
import {
  addUser,
  signUp,
  signIn,
  signOut,
  isLoggedIn,
} from "../services/userService";

export const signupController = (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = signUp(email, password);
    res.status(201).json({ message: "Signup successful", user });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const signinController = (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = signIn(email, password);
    res.json({ message: "Signin successful", user });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const signoutController = (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const user = signOut(email);
    res.json({ message: "Signout successful", user });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const addUserController = (req: Request, res: Response) => {
  try {
    const { adminEmail, email, password } = req.body;

    if (!isLoggedIn(adminEmail)) {
      return res.status(403).json({ error: "Admin must be logged in" });
    }

    const user = addUser(email, password, "user");
    res.status(201).json({ message: "User added by admin", user });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};
