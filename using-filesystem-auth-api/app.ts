import express from "express";
import bodyParser from "body-parser";

import router from "./src/routes/userRoutes";

const app = express();

const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use("/", router);

app.listen(port);




export default app;



