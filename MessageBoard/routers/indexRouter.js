import express from "express";
import {renderAllMessages} from "../controllers/indexController.js";


const indexRouter = express.Router();

indexRouter.get("/", renderAllMessages);

export default indexRouter;