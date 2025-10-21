import express from "express";
import router from "./routes/userRouter.js"


const app = express();

app.get("/", (req,res)=>{
 res.send("This is my first server")
})

app.use("/" , router)

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});