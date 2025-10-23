
import express from "express";
import { connectDB } from "./db.js";
import { User } from "./student-model.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => res.send("OK"));


app.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});


app.get("/users", async (_req, res) => {
  const users = await User.find().lean();
  res.json(users);
});

const PORT = 5050;
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running: http://localhost:${PORT}`));
});