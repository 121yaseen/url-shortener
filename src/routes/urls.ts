import { Router } from "express";

const route = Router();

route.get("/", (req, res) => {
  res.send("GET /urls");
});

export default route;
