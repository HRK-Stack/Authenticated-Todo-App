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
            token: await generateToken(user._id)
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
        const user = await User.findOne({email}).select('+password');        

        if(!user || !(await user.matchPassword(password)))
        {
            return res.status(401).json({message:"Invalid Credentials"});
        }        

        const token = await generateToken(user._id);

        res.status(200).json({
            id:user._id,
            name:user.name,
            email:user.email,
            token
        })
    } catch (err) {
         res.status(500).json({message:err.message});
    }
}

export const getUserProfile = async (req, res) => {
  try {
    const user = req.user;

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch profile", error });
  }
};