import express from "express";
import {getUsernames} from "../controllers/indexController.js";


const indexRouter = express.Router();


indexRouter.get("/", getUsernames);

export default indexRouter;