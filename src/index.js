import express from "express";
import logMiddleware from "./middleware/logger.js";
import createUser from "./createUser.js";
const app = express();

const port = 3000;

app.use(express.json());
app.use(logMiddleware);

app.get("/", (req, res) => {
  res.send(" Hello World ");
});

app.get("/users", (req, res) => {
  res.send("new users route");
});

app.post("/users", (req, res) => {
  const body = req.body;
  const newUser = createUser(body);
  res.status(201).json(newUser);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});