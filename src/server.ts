// since types are added to express, imports will be easy
import express from "express";
import userRoute from "./routes/users";
import urlRoute from "./routes/urls";

const app = express();

app.use("/users", userRoute);
app.use("/urls", urlRoute);

app.get("/", (req, res) => {
  res.send("Server Running!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
