import pool from "./pool.js";

async function getAllMessages() {
    const {rows} = await pool.query("SELECT id, username, message FROM messages");
    return rows;
}

async function addMessage(username, message) {
    await pool.query("INSERT INTO messages (username, message) VALUES ($1, $2)", [username, message]);
}

async function getMessageById(id) {
    const {rows} = await pool.query("SELECT id, username, message FROM messages WHERE id = $1", [id]);
    console.log(rows, rows[0]);
    return rows[0];
}

export {
    getAllMessages,
    addMessage,
    getMessageById
}