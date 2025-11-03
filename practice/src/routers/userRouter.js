import express from "express";
import userController from "../controllers/userController.js"

const router = express.Router();

router.get("/users",userController.getAllUsers)
router.post ("/create",userController.createUser)
router.put("/update",userController.updateUser)
router.delete("/delete",userController.deleteUser)

export default router;