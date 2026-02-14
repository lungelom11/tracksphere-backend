import jwt from 'jsonwebtoken';
import type { Response } from 'express';

const  generateToken = (adminID: string, res: Response) => {
    const payload = { id: adminID };
    const token = jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: '1h' });


    res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 3600000, // 1 hour
    });

    return token;
};

export default generateToken;