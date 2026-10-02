import express from "express";
import "dotenv/config";
import { inngest} from "./inngest/index.js";


const app= express();

app.use(express.json());
app.use("/api/inngest", serve({ client: inngest, functions }));

app.get("/", (req, res)=>{
    res.send("Server is Running.");
})

const port= process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
})

