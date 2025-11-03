import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import router from "./routers/userRouter.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 4000;
app.use(cors())
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("🚀 Prisma + Postgres + Express Server Running!");
});
app.use("/",router)


app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
