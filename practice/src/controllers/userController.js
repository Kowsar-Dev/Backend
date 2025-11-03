
import userServices from "../services/userServices.js"

const controllers = {
  
 async createUser (req,res){
    try {
        const userData = req.body;
        if(!userData || !userData.email){
           return res.json({error : "Invalid User Data"}) 
        }
        const user = await userServices.createUser(userData);
        if(!user){
            return res.json ({error: "This Email Already Exists"})
        }
        res.status(201).json({message : "User registered successfully",user})
    } catch (error) {
        res.status(400).json({error :error.message});
    }
 },

 async getAllUsers (req,res) {
  try {

    const users = await userServices.getAlluser();
    res.status(200).json (users)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
 },

 async updateUser (req,res){
   try {
    const user = await userServices.updateUser(req.params.id,req.body);
    res.json({message:"user updated successfullly",user})
   } catch (error) {
    res.status(400).json ({error : error.message})
    
   }
 },

  async deleteUser(req, res) {
        try {
            const {email} = req.body;

         if (!email) {
        return res.status(400).json({ error: "Email is required" });
      }
           const  user=await userServices.deleteUser(email);
         if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.status(200).json({ message: 'User deleted successfully' });
        } catch (error) {
            
            res.status(500).json({ error: 'Failed to delete user' });
        }

}

}

export default controllers