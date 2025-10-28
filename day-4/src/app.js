import express from "express";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Prisma PostgreSQL CRUD API!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
