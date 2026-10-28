import express from "express";
import messages from "../db.js";

const messageDetailsRouter = express.Router();


messageDetailsRouter.get("/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
    const message = messages.find(message => String(message.id) === id);
    console.log(message);
    res.render("message", {message: message});
});


export default messageDetailsRouter;