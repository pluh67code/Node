import express from "express";
import indexRouter from "./routers/indexRouter.js";
import messagesRouter from "./routers/messagesRouter.js";
import messageDetailsRouter from "./routers/messageDetailsRouter.js";

const app = express();
const port = process.env.port || 8080;
app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));

app.get("/", indexRouter);
app.use("/messages", messageDetailsRouter);
app.use("/new", messagesRouter);


app.listen(port,  (err) => {
    if (err) throw err;
    console.log(`App started on port ${port}`);
})