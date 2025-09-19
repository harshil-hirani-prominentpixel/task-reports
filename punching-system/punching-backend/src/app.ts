import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cron from "node-cron";
import router from "./routes/punchRoutes";
import {
  getTodayPunchFile,
  readPunches,
  writePunches,
} from "./utils/fileHandler";
import fs from "fs";
import cors from 'cors';


const app = express();


const todayFile = getTodayPunchFile();
if (!fs.existsSync(todayFile)) {
  fs.writeFileSync(todayFile, JSON.stringify([], null, 2));
  console.log(`Created today's punch file on server start: ${todayFile}`);
} else {
  const punches = readPunches();
  writePunches(punches);
  console.log(
    `Today's punch file already exists, loaded ${punches.length} entries`
  );
}

cron.schedule("0 0 * * *", () => {
  
  const nextDay = new Date();
  
  nextDay.setDate(nextDay.getDate() + 1);
  const year = nextDay.getFullYear();
  const month = String(nextDay.getMonth() + 1).padStart(2, "0");
  const day = String(nextDay.getDate()).padStart(2, "0");
  
  const nextFile = `./punches/punches-${year}-${month}-${day}.json`;
  
  if (!fs.existsSync(nextFile)) {
    fs.writeFileSync(nextFile, JSON.stringify([], null, 2));
    console.log(`Created new punch file for next day: ${nextFile}`);
  }
});


app.use(
  cors()
);

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.use(express.json());

app.post("/punch", (req : Request, res : Response) => {
  res.json({ message: "Punch successful!" });
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on : ${PORT}`);
});
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 