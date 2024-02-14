import { Request, Response } from "express"  
export const getUser = (req: Request , res: Response) => {
    res.json({
        message: 'Hello World'
    })
}