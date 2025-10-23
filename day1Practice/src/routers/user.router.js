import express from "express";
import controllers from "../controllers/user.controller.js";

const router = express.Router()

router.get("/firstuser", controllers.controller1);
router.get ("/lastuser",controllers.controller2);

export default router;