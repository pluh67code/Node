import * as db from "../db/queries.js";
import {body, validationResult, matchedData} from "express-validator";

function renderMessageForm(req, res) {
    res.render("form");
}

const validateInput = [
    body("username").trim().isLength({min: 1, max: 20})
    .withMessage("Username must be between 1 and 20 characters"),
    body("message").trim().isLength({min: 1, max: 255})
    .withMessage("Message must be between 1 and 255 characters")
]

const postMessageForm = [
    validateInput,
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).render("form", {errors: errors.array()});
        }
        const {username, message} = matchedData(req);
        await db.addMessage(username, message);
        res.redirect("/");
    }
]


export {
    renderMessageForm,
    postMessageForm,
}

