import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

export const register = async(req,res) => {
    const {name , email , password } = req.body;

    try{
        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({
                message:"User Already Exist"
            })
        }

        const user = await User.create({name,email,password});

        res.status(201).json({
            id:user._id,
            name:user.name,
            email:user.email,
            token:generateToken(user._id)
        });
    }catch(err){
        res.status(500).json({message:err.message});
    }
}

export const login = async(req,res) => {
    const {email , password} = req.body;

    if(!email || !password){
        return res.status(400).json({message:"email and Password Required"});
    }

    try {
        const user = await User.findOne({email});

        if(!user ||  !(await user.matchPassword(password)))
        {
            return res.status(401).json({message:"Invalid Credentials"});
        }

        res.status(200).json({
            id:user._id,
            name:user.name,
            email:user.email,
            token:generateToken(user._id)
        })
    } catch (err) {
         res.status(500).json({message:err.message});
    }
}