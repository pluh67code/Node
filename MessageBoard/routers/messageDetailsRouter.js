import express from "express";
import {renderMessageDetails} from "../controllers/messageDetailsController.js";


const messageDetailsRouter = express.Router();

messageDetailsRouter.get("/:id", renderMessageDetails);

export default messageDetailsRouter;