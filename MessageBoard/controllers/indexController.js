import * as db from "../db/queries.js";


async function renderAllMessages(req, res) {
    const messages = await db.getAllMessages();
    console.log("Rendered all messages ", messages);
    res.render("index", {title: "Messages", messages: messages});
}


export {
    renderAllMessages,

}