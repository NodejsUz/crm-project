import { RequestHandler, Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import CustomError from '../utils/error/CustomError';

function ValidationMiddleware(schema: Joi.Schema): RequestHandler {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const options = {
        abortEarly: false,
        allowUnknow: true,
        scriptUnknow: true,
      };

      const value = await schema.validateAsync(req.body, options);

      req.body = value;
      next();
    } catch (error: any) {
      next(new CustomError(400, error.message, error.stack));
    }
  };
}

export default ValidationMiddleware;
