import { Request, Response } from "express";

import { readPunches, writePunches, readUsers } from "../utils/fileHandler";

import { IUser } from "../model/userModel";
import { IPunch } from "../model/punchModel";

const isSameDay = (d1: string, d2: string) => {
  const date1 = new Date(d1);
  const date2 = new Date(d2);
  return (
    date1.getUTCFullYear() === date2.getUTCFullYear() &&
    date1.getUTCMonth() === date2.getUTCMonth() &&
    date1.getUTCDate() === date2.getUTCDate()
  );
};

export const punch = (req: Request, res: Response) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: "name required" });

  const users = readUsers();
  const user = users.find((user: IUser) => user.name === name);
  if (!user) return res.status(404).json({ message: "User not registered" });

  const punches: IPunch[] = readPunches();
  const now = new Date();

  let lastPunch = punches
    .filter((punch) => punch.userId === user.userId)[0];

    
  if ( lastPunch && !isSameDay(lastPunch.punchIn, now.toISOString()) && !lastPunch.punchOut
  ) {
    const punchDate = new Date(lastPunch.punchIn);

    lastPunch.punchOut = new Date(
      punchDate.getFullYear(),
      punchDate.getMonth(),
      punchDate.getDate(),
      23,
      59,
      59
    ).toISOString();

    lastPunch.updatedAt = now.toISOString();
  }

  let todayPunch = punches.find(
    (punch) => punch.userId === user.userId && isSameDay(punch.punchIn, now.toISOString())
  );

  if (!todayPunch) {
    const newPunch: IPunch = {
      userId: user.userId,
      name: user.name,
      punchIn: now.toISOString(),
      punchOut: null,
      createdAt: now.toISOString(),
      updatedAt: now.toISOString(),
    };

    punches.push(newPunch);
    writePunches(punches);
    return res.json({ message: "PunchIn successful", punch: newPunch });
  }

  if (!todayPunch.punchOut) {
    todayPunch.punchOut = now.toISOString();
    todayPunch.updatedAt = now.toISOString();

    writePunches(punches);
    return res.json({ message: "PunchOut successful", punch: todayPunch });
  }

  return res
    .status(400)
    .json({ message: " Already completed PunchIn and PunchOut today" });
};
