import express from 'express';
import  userController from '../Controllers/userController.js';

import verifyMiddleware from '../middleware/verify.js';

const router = express.Router();


router.get('/getall', verifyMiddleware, userController.getUser);
router.post('/create', userController.createUser);
router.put('/:email', userController.updateUser);
router.delete('/:email', userController.deleteUser);

router.post('/login', userController.loginUser);

export default router;