import express from "express";
import {renderMessageForm, postMessageForm} from "../controllers/messagesController.js";

const messagesRouter = express.Router();

messagesRouter.get("/", renderMessageForm);
messagesRouter.post("/", postMessageForm);

export default messagesRouter;