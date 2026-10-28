import pool from "./pool.js";

async function getAllUsernames() {
    const {rows} = await pool.query("SELECT * FROM usernames");
    return rows;
}

async function insertUsername(username) {
    await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function getUsernames(search) {
    const {rows} = await pool.query("SELECT * FROM usernames WHERE username LIKE $1", [`%${search}%`]);
    return rows;
}

async function deleteAllUsernames() {
    await pool.query("DELETE FROM usernames");
}

export {
    getAllUsernames,
    insertUsername,
    getUsernames,
    deleteAllUsernames,
}