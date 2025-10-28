import express from 'express';
import  userController from '../controllers/userController.js';

const router = express.Router();


router.get('/getall', userController.getUser);
router.post('/create', userController.createUser);
router.put('/:email', userController.updateUser);
router.delete('/:email', userController.deleteUser);

export default router;