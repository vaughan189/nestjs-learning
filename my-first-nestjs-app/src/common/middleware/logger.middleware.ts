// Class Middleware middleware 
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    console.log('Request...');
    next();
  }
}

// Functional middleware 
// export function logger(req: Request, res: Response, next: Function) {
//   console.log(`Request...`);
//   next();
// };