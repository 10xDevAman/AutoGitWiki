import express from "express";
import dotenv from "dotenv/config";

const app= express();

app.get("/", (req, res)=>{
    res.send("Server is Running.");
})

const port= process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
})

