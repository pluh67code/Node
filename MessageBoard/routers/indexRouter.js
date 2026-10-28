import express from "express";
import messages from "../db.js";

const indexRouter = express.Router();

indexRouter.get("/", (req, res) => {
    res.render("index", {title: "Mini Message Board", messages: messages});
})

export default indexRouter;