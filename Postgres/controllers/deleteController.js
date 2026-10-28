import * as db from "../db/queries.js";




async function deleteAllUsernames(req, res) {
    await db.deleteAllUsernames();
    res.redirect("/");
}




export {
    deleteAllUsernames,
}