import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const protect = async(req,res,next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if(!token) return res.status(401).json({message:"Not Authorized,No Token"});

    try {
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        req.user = await User.findById(decode.id);
        console.log("authMiddleware Password Checking With Select False : " + req.user);
        next();
    } catch (error) {
        res.status(401).json({message:"Token Failed or Expired"});
    }
}