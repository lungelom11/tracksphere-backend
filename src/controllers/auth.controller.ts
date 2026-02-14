import bcrypt from 'bcryptjs';
import {prisma} from '../config/db';
import type { Request, Response } from 'express';
import generateToken from '../utils/generateToken';

const loginController = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    //Check if admin exists using the email
    const adminExists = await prisma.admin.findUnique({ where: { username } });

    if (!adminExists) {
        return res.status(401).json({ message: 'Invalid username or password'});
    };

    //Validate password
    const isPasswordValid = bcrypt.compareSync(password, adminExists.password);

    if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid username or password' });
    };

    //Generate JWT token
    const token = generateToken(adminExists.id,res);

    res.status(201).json({
        status: 'success',
        message: 'Login successful',
        data: {
            admin: {
                username: adminExists.username,
                email: adminExists.email,
            }   
        },
        token,
    })

};


const logoutController = async (req: Request, res: Response) => {
    res.clearCookie('token', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
    });
    res.status(200).json({
        status: 'success',
        message: 'Logout successful',
    });
};

export { loginController, logoutController };   
