import * as db from "../db/queries.js";


// fix type error in message.ejs, when id not existing in DB
async function renderMessageDetails(req, res) {
    const id = req.params.id;
    const message = await db.getMessageById(id);
    if (!message) return res.status(400).send("Not found");
    res.render("message", {message: message});
}


export {
    renderMessageDetails,

}