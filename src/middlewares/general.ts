// Modules
import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export function validateValuesMiddleWare (req:Request, res:Response, next:NextFunction) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  } catch (err:any) {
    res.status(500).json({ errors: "Server error" });
  }
}