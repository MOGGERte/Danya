import cors from "cors";
import express from "express";

import { user } from "./mocks/user.js";
import { plans } from "./mocks/plans.js";
const app = express();
const port = 3000;

app.use(cors({ origin: "localhost:5173" }));
app.use(express.json());

app.get("/user/:id", (req, res) => {
  console.log("user");
  const userId = Number(req.params.id);
  const userData = user.find((u) => u.id === userId);
  res.json(userData);
});

app.get("/user/:id/plan", (req, res) => {
  const userId = Number(req.params.id);
  const userData = user.find((u) => u.id === userId);
  const plan = plans.find((p) => p.type === userData.plan);
  res.json(plan);
});

{
  try {
    console.log("db connected");
    app.listen(port, () => {
      console.log(`start on ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
}
