import express from "express";
import router from "./src/routers/user.router.js";

const app = express();
const port = 4000;


app.get("/", (req,res)=> {
    res.send("This is my first server")
    
});

app.use("/",router)

app.listen (port ,()=>{
     console.log(`Server is running on http://localhost:${port}`)
})