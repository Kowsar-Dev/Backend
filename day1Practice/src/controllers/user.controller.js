import users from "../services/user.services.js";

const controllers = {
    async controller1 (req,res){
        try {
            const user1 = await users.user1();
            res.send (user1)
        } catch (error) {
            res.send("user is not found")
            
        }
    },

    async controller2 (req, res){
        try {
            const user2 = await users.user2();
            res.send(user2);
        } catch (error) {
            res.send("user does not found")
            
        }

    }
}

export default controllers;