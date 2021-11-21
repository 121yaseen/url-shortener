// since types are added to express, imports will be easy
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server Running!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
