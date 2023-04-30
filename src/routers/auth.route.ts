import AuthCtrl from '../controller/auth.ctrl';
import { register, login } from '../utils/validation/auth.valid';

import { Router } from 'express';
import ValidationMiddleware from '../middleware/validate.middleware';
const authCtrl = new AuthCtrl();

const authRouter: Router = Router();

/**
 * @swagger
 * /api/auth/register:
 *      post:
 *          summary: User register
 *          tags:
 *              - Auth
 *          requestBody:
 *            required: true
 *            content:
 *              application/json:
 *                schema:
 *                  type: object
 *                  properties:
 *                    username:
 *                       type: string
 *                       example: lorem
 *                    email:
 *                       type: string
 *                       example: admin312@gmail.com
 *                    password:
 *                       type: string
 *                       example: 312434151
 *                    firstname:
 *                       type: string
 *                       example: lorem ipsum
 *                    story:
 *                        type: string
 *                        example: user about
 *          responses:
 *              200:
 *                  description: User register success
 */
authRouter.post(
  '/register',
  ValidationMiddleware(register),
  authCtrl.register.bind(authCtrl)
);

/**
 * @swagger
 * /api/auth/login:
 *      post:
 *          summary: User register
 *          tags:
 *              - Auth
 *          requestBody:
 *            required: true
 *            content:
 *              application/json:
 *                schema:
 *                  type: object
 *                  properties:
 *                    email:
 *                       type: string
 *                       example: admin312@gmail.com
 *                    password:
 *                       type: string
 *                       example: 312434151
 *          responses:
 *              200:
 *                  description: User register success
 */
authRouter.post(
  '/login',
  ValidationMiddleware(login),
  authCtrl.login.bind(authCtrl)
);

export default authRouter;
