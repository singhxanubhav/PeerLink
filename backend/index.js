import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./models/index.js";
const app = express();

app.use(express.json());
dotenv.config();

app.get("/", (req, res) => {
  res.send("Hi There!");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectDB();
});

export default app;
