import express from 'express';
import path from 'path';


import userRoute from './Routes/userRoute.js';

import cors from 'cors';


const app = express();

//enable cors to all
app.use(cors());

app.use(express.json());

app.use('/api/user', userRoute);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});