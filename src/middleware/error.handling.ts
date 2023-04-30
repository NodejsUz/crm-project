import { Request, Response, NextFunction } from 'express';
import CustomError from '../utils/error/CustomError';

function ErrorHandling(
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const status = err.status || 500;
    const message = err.message || 'Some Error';
    const stack = err.stack || '';

    res.send({
      status,
      message,
      stack,
    });
    next();
  } catch (error: any) {
    res.status(500).json(error.message);
  }
}

export default ErrorHandling;
