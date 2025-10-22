import express from "express";
import users from "./main.js"

const app = express();
const port =3000;

app.use(express.json());


let jsondata = users;
app.get("/" ,(req, res)=>{
  res.send(" Hello Mak tech solution")
});
app.get("/about", (req,res)=>{
    res.send("This company is reputed company")
});
app.get("/about/:id" , (req,res)=>{
     let users = (req.params.id);
     let existingUser = jsondata.find((user)=>user.id==users);
     if(!existingUser){
        res.send("user does not exist")
     }

      res.json(existingUser);
})

app.listen(port)