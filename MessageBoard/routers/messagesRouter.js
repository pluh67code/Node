import express from "express";
import messages from "../db.js";

const messagesRouter = express.Router();
let nextId = 3;

messagesRouter.route("/")
.get((req, res) => {
    res.render("form");
})
.post((req, res) => {
    const {user, text} = req.body;
    messages.push({id: nextId++, text, user, added: new Date()});
    res.redirect("/");
});

export default messagesRouter;