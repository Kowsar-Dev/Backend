import express from "express";
import controller from "../controllers/userController.js";

const router = express.Router();

router.get("/firstpoint", controller.controller);
router.get("/endpoint", controller.control);
// router.get ("/test",controller.control);


export default router;