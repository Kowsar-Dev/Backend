import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();
const port = 5000;

app.use(express.json());


app.get("/",(req,res)=>{
 res.send("hello backend")
})
// 🟢 Get All Users
app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

// 🟡 Create User
app.post("/users", async (req, res) => {
  const { name, email } = req.body;
  const user = await prisma.user.create({ data: { name, email } });
  res.json(user);
});

// 🔵 Update User
app.put("/users/:email", async (req, res) => {
  const { name, email } = req.body;
  const user = await prisma.user.update({
    where: { email: email },
    data: { name, email },
  });
  res.json(user);
});

// 🔴 Delete User
app.delete("/users/:email", async (req, res) => {
  const { email } = req.body;
  await prisma.user.delete({ where:  {email:email} });
  res.json({ message: "User deleted" });
});

app.listen(port, () => console.log(`🚀 Server running on http://localhost:${port}`));
