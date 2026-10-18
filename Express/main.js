import express from "express";
import authorRouter from "./routes/authorRouter.js";
import bookRouter from "./routes/bookRouter.js";
import indexRouter from "./routes/indexRouter.js";

const app = express();
const PORT = process.env.PORT || 3000;


app.use("/author", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);



app.listen(PORT, (error) => {
    if (error) throw error;

    console.log(`Express app - listening on port ${PORT}`);
})

