// Modules
import { body } from 'express-validator';
import { JwtPayload, verify } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

// Middlewares
import { validateValuesMiddleWare } from './general';

export const logInValueMiddleware = [
  body('username').isString(),
  body('password').isString(),
  validateValuesMiddleWare
];

export const submitDriverMiddelware = [
  body('username').isString(),
  body('password').isString(),
  body('fullname').isString(),
  validateValuesMiddleWare
]

export function validateTokenMiddleware (req:Request, res:Response, next:NextFunction) {
  try {
    const { token } = req.headers;
    if (!token) return res.status(401).json({ message:'No token' });
    const tokenResult = verify(token as string, process.env.SECRET_KEY!) as JwtPayload;
    req.body.tokenResult = tokenResult.id;
    next();
  } catch (err:any) {
    res.status(400).json({ message:'Bad token' });
  }
}