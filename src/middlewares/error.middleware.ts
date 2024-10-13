import {
  Injectable,
  NestMiddleware,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ErrorMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    next();
  }

  handleError(error: any, req: Request, res: Response) {
    if (error instanceof HttpException) {
      const response = error.getResponse();
      const status = error.getStatus();
      res.status(status).json({
        statusCode: status,
        message: response['message'] || response,
        error: response['error'] || 'Internal Server Error',
      });
    } else {
      // Caso não seja uma HttpException, retornamos um erro genérico
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'An unexpected error occurred.',
        error: error.message || 'Internal Server Error',
      });
    }
  }
}
