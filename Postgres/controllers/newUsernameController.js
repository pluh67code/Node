import * as db from "../db/queries.js";


async function createUsernameGet(req, res) {
    res.render("form");
}

async function createUsernamePost(req, res) {
    const {username} = req.body;
    await db.insertUsername(username);
    res.redirect("/");
}

export {
    createUsernameGet,
    createUsernamePost,
}