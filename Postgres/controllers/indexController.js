import * as db from "../db/queries.js";

async function getUsernames(req, res) {
    const search = req.query.search;
    let usernames;
    if (search) {
        usernames = await db.getUsernames(search);
    }
    else {
        usernames = await db.getAllUsernames();
    }
    console.log("Usernames: ", usernames);
    res.send("Usernames: " + usernames.map(user => user.username).join(", "));
}


export {
    getUsernames,
}