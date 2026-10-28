import express from "express";
import * as newUser from "../controllers/newUsernameController.js";

const newUsernameRouter = express.Router();


newUsernameRouter.get("/", newUser.createUsernameGet);
newUsernameRouter.post("/", newUser.createUsernamePost);


export default newUsernameRouter;