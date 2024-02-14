import { Request, Response } from 'express';
import User from '../models/user.model';

export const signup =  async (req: Request , res: Response) => {
   const { username, email, password} = req.body;
   const newUser = new User({username,email,password})
   await newUser.save()
}