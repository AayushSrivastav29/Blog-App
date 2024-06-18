//HW create Blog app-> routes for creating & retreiving post,define routes for liking & unliking post,
// creating & retreive comments. diff schema for like, comment, post

import express from "express";
import { configDotenv } from "dotenv";
import dbconnect from "./src/config/database.js";
import router from "./src/routes/blogAppRoute.js";

const app= express();
app.use(express.json()); //body-parser/fetch

configDotenv();
dbconnect();

app.use("/api/v1", router);

const PORT = process.env.PORT || 8000

app.get("/" , (req,res)=>{
    res.send(`<h1>Main page Blog APP baby!</h1>`)
})

app.listen(PORT, ()=>{
    console.log(`server is connected ${PORT}`);
})
