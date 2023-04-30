import { Request, Response, NextFunction } from 'express';
import AuthService from '../services/auth.service';
import CustomError from '../utils/error/CustomError';
import JwtGenerate from '../utils/jwt/jwt';

class AuthCtrl {
    private authService = new AuthService();
    private jwt = new JwtGenerate();

    public async register(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await this.authService.register(req.body);

            const token = this.jwt.generateJwt(result._id);
            const refresh_token = this.jwt.refresh_token(result._id);

            res.cookie("refreshtoken", refresh_token, {
                httpOnly: true,
                maxAge: 30 * 24 * 60 * 60 * 1000
            })

            res.status(201).send({ result, token });
        } catch (error: any) {
            next(new CustomError(400, error.message));
        }
    }

    public async login(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await this.authService.login(req.body);

            const generateToken = this.jwt.generateJwt(result._id);
            const refresh_token = this.jwt.refresh_token(result._id);

            res.cookie("refreshtoken", refresh_token, {
                httpOnly: true,
                maxAge: 30 * 24 * 60 * 60 * 1000,
                path: "/api/refresh_token"
            })

            res.status(200).send({ result, generateToken });
        } catch (error: any) {
            next(new CustomError(400, error.message));
        }
    }
}

export default AuthCtrl;
