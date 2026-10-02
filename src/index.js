import express from "express";
import "dotenv/config";
import { inngest, functions } from "./inngest/index.js";
import { serve } from "inngest/express";
import indexRoutes from "./routes/index.routes.js";


const app = express();

app.use(express.json());
app.use("/api/inngest", serve({ client: inngest, functions }));

app.get("/", (req, res) => {
  res.send("Server is Running.");
});

app.use("/api/index", indexRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
