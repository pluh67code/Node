import http from "node:http";
import fs from "node:fs/promises";
import express from "express";


const PORT = 8080;
const routes = {
    "/": "./index.html",
    "/about": "./about.html",
    "/contact-me": "./contact-me.html",
}
const ERR_FILEPATH = "./404.html";
const app = express();

app.get("/", async (req, res) => {
    let body = await fs.readFile(routes["/"], {"encoding": "utf8"});
    res.send(body);
});

app.get("/about", async (req, res) => {
    let body = await fs.readFile(routes["/about"], {"encoding": "utf8"});
    res.send(body);
});

app.get("/contact-me", async (req, res) => {
    let body = await fs.readFile(routes["/contact-me"], {"encoding": "utf8"});
    res.send(body);
});

app.use(async (req, res) => {
    res.status(404);
    let body = await fs.readFile(ERR_FILEPATH, {"encoding": "utf8"});
    res.send(body);
})

app.listen(PORT, (error) => {
    if (error) throw error;
    console.log(`Started listening on port: ${PORT}`);
})