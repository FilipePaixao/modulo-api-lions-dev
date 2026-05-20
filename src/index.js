import express from "express";
import logMiddleware from "./middleware/logger.js";
import createUser from "./functions/createUser.js";
import updateUser from "./functions/updateUser.js";
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

app.put("/users/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const body = req.body;
  const updatedUser = updateUser(id, body);
  res.status(200).json(updatedUser);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});