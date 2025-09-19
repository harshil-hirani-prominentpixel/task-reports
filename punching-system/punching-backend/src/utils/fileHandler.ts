import fs from "fs";
import path from "path";
import { IUser } from "../model/userModel";
import { IPunch } from "../model/punchModel";

const userFile = path.join(__dirname, "../../users.json");
const punchesDir = path.join(__dirname, "../../punches/");

if (!fs.existsSync(punchesDir)) fs.mkdirSync(punchesDir);

function ensureFile(filePath: string) {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([], null, 2));
  }
}

export const readUsers = (): IUser[] => {
  ensureFile(userFile);
  return JSON.parse(fs.readFileSync(userFile, "utf-8"));
};

export const writeUsers = (users: IUser[]) => {
  fs.writeFileSync(userFile, JSON.stringify(users, null, 2));
};

export const getTodayPunchFile = (): string => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return path.join(punchesDir, `punches-${year}-${month}-${day}.json`);
};

export const readPunches = (): IPunch[] => {
  const filePath = getTodayPunchFile();
  ensureFile(filePath);
  return JSON.parse(fs.readFileSync(filePath, "utf-8")) as IPunch[];
};

export const writePunches = (punches: IPunch[]): void => {
  const filePath = getTodayPunchFile();

  fs.writeFileSync(filePath, JSON.stringify(punches, null, 2));
};
