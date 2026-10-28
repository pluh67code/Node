import express from "express";
import path from "node:path";
import {fileURLToPath} from "node:url";
import newUsernameRouter from "./routes/newUsernameRouter.js";
import indexRouter from "./routes/indexRouter.js";
import deleteRouter from "./routes/deleteRouter.js";


const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsPath = path.join(__dirname, "public");
const app = express();
const port = 8080;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/new", newUsernameRouter);
app.use("/delete", deleteRouter);

app.listen(port, (err) => {
    if (err) throw err;
    console.log("Started");
});