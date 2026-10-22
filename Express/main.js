import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
//
import authorRouter from "./routes/authorRouter.js";
import bookRouter from "./routes/bookRouter.js";
import indexRouter from "./routes/indexRouter.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsPath = path.join(__dirname, "public");
const app = express();
const PORT = process.env.PORT || 3000;
const links = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
]
const footLinks = [
    { href: "/", text: "poop" },
    { href: "/poop", text: "idk" }
]

const users = ["Rose", "Cake", "Biff"];
const aboutMessage = "bonjour le mon! welcome to cro-deez! where the mandem play and the yute are bare waste fam!";

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(assetsPath));



app.get("/", (req, res) => {
    res.render("index", {links: links, users: users, footLinks: footLinks});
});
app.get("/about", (req, res) => {
    res.render("about", {aboutMessage: aboutMessage, links: links, footLinks: footLinks});
});

app.use("/author", authorRouter);
app.use("/books", bookRouter);


app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.statusCode || 500).json({error: err.message});
})

app.listen(PORT, (error) => {
    if (error) throw error;
    console.log(`Express app - listening on port ${PORT}`);
})

