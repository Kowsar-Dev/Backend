import services from "../services/userService.js";

const controller = {
    async controller (req,res){
        try {
           // const [user1,user2] = await Promise.all([services.oneUser(),services.twoUser()]);
            const user1 = await services.oneUser()
            res.send (user1,)
        } catch (error) {
             res.send ("something is wrong")
        }
    },
    async control (req,res){
        try {
            const user2 = await services.twoUser()
            res.send(user2)
        } catch (error) {
             res.send ("something is wrong")
        }

    }
}

export default controller;