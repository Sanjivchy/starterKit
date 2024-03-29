import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route';
import authRoutes from './routes/auth.route';

dotenv.config();

mongoose.connect(process.env.MONGO || '')
.then(()=>{
    console.log('Database connected');
})
.catch((err)=>{
    console.log(err);
})

const app = express();
app.use(express.json());
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
