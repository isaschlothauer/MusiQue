import express from "express";
import database from "./database";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("We are building MusiQue's backend!");
});

app.listen(5000, () => {
  if (database.getConnection() == null) {
    console.error("WARNING: Database connection failed");
    process.exit(1);
  }
  console.log(
    "DATABASE CONNECTED: check the backend info on http://localhost:5000"
  );
});




