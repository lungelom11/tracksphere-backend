import express from 'express';
import { loginController, logoutController } from '../controllers/auth.controller.js';

const route = express();

route.post('/auth/login', loginController);

route.post('/auth/logout', logoutController);


export default route;
