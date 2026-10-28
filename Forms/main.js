import express from "express";
import usersRouter from "./routers/usersRouter.js";

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({extended: true}));

app.use("/", usersRouter);





const PORT = process.env.PORT || 8080;
app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`App listening on port: ${PORT}`);
})