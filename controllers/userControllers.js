import bcrypt from 'bcryptjs';
import JWT from 'jsonwebtoken'
import userSchema from '../models/userModel.js';

const SECRET = process.env.SECRET;

export const user_signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const validUser = await User.findOne({ email });
        const validPassword = await bcrypt.compare(password, validUser.password);
        const token = JWT.sign(
            { id: validUser._id, email: validUser.email }, 
            SECRET, 
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
        const existingUser = await User.findOne({ email });
        const hashedPassword = await bcrypt.hash(password, 12);
        
        if(existingUser){
            res.status(400).json({ message: "Email already Exists!" });
        }

        const newUser = {
            firstName,
            lastName,
            name: `${firstName} ${lastName}`,
            email,
            password: hashedPassword
        };
        const result = await User.create(newUser);
        const token = JWT.sign(
            {id: result._id, email: result.email },
            SECRET, 
            { expiresIn: "1h" }
        );

        res.status(200).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}