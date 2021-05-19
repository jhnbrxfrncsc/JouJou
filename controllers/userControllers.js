import bcrypt from 'bcryptjs';
import JWT from 'jsonwebtoken'
import UserSchema from '../models/userModel.js';

const SECRET = process.env.SECRET;

export const user_index = async (req,res) => {
    try {
        const allUsers = await UserSchema.find();
        res.status(200).json(allUsers);
    } catch (error) {
        console.log(error.message);
    }
}

export const user_signin = async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const validUser = await UserSchema.findOne({ email });
        const validPassword = await bcrypt.compare(password, validUser.password);
        const token = JWT.sign(
            { id: validUser._id, email: validUser.email }, 
            'test', 
            { expiresIn: "1h" }
        );
        if(!validUser){
            res.status(404).json({ message: "Incorrect Email!" });
        }
        if(!validPassword){
            res.status(400).json({ message: "Incorrect password!" });
        }
        
        res.status(200).json({ result: validUser, token });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const user_signup = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    try {
        const existingUser = await UserSchema.findOne({ email });
        const hashedPassword = await bcrypt.hash(password, 12);
        
        if(existingUser){
            res.status(400).json({ message: "Email already Exists!" });
        }

        const result = await UserSchema.create({
            firstName,
            lastName,
            name: `${firstName} ${lastName}`,
            email,
            password: hashedPassword
        });
        console.log(result);
        const token = JWT.sign(
            { id: result._id, email: result.email },
            'test', 
            { expiresIn: "1h" }
        );
        res.status(200).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}