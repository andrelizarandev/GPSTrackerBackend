// Modules
import { body } from "express-validator";
import { NextFunction, Request, Response } from "express";

// Middlewares
import { validateValuesMiddleWare } from "./general";

// Models
import CompanyModel from '../models/company';

export const submitCompanyValuesMiddleware = [
  body('socialReason').isString(),
  body('rfc').isString(),
  body('contactNumber').isString(),
  body('email').isEmail(),
  body('password').isString(),
  validateValuesMiddleWare
];

export const loginCompanyValuesMiddleware = [
  body('email').isEmail(),
  body('password').isString(),
  validateValuesMiddleWare
]

export async function validateCompanyId (res:Response, req:Request, next:NextFunction) {
  try {
    const { tokenResult } = req.body;
    const companyResult = await CompanyModel.findById(tokenResult);
    if (!companyResult) { res.status(400).json({ message:'Bad Token' }); return; }
    next();
  } catch (err:any) {
    res.status(500).json({ message:'Server error' });
  }
}