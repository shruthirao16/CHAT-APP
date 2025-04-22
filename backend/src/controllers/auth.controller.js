import User from "../models/user.model.js"
import bcrypt from "bcrypt.js" 

export const signup = async(req, res)=>{
    const {fullname,email,password} = req.body
    try{
        if(password.length<6){
            return res.status(400).json({messge: "Password must be atleast 6 characters"});
        }

        const user = await User.findOne({email});

        if(user) return res.status(400).json({messge: "Email already exists!"});

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            fullname,
            email,
            password:hashedPassword
        })

        if(newUser){

        } else {
            res.status(400).json({messge: "Invalid user data"});
        }
    }
};
export const login = (req, res)=>{
    res.send("login route")
};
export const logout = (req, res)=>{
    res.send("logout route")
};