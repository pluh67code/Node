import express from "express";
import {deleteAllUsernames} from "../controllers/deleteController.js";

const deleteRouter = express.Router();

deleteRouter.get("/", deleteAllUsernames);

export default deleteRouter;