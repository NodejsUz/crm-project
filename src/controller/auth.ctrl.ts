import { Router, Request, Response, NextFunction } from "express";
import AuthService from "../services/auth.service";
import CustomError from "../utils/error/CustomError";

class AuthCtrl {
    private authService = new AuthService();

    public async register(
        req: Request,
        res: Response,
        next: NextFunction
    ){
        try {
            const result = await this.authService.register(req.body);

            // res.cookie("refreshtoken", )

            res.status(201).send(result);
        } catch (error: any) {
            next(new CustomError(400, error.message, error.stack))
        }
    }
}

export default AuthCtrl