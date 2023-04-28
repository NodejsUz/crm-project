import AuthCtrl from "../controller/auth.ctrl";

import { Router } from "express";
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
authRouter.post("/register", authCtrl.register.bind(authCtrl));

export default authRouter