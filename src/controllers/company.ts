// Modules
import { Request, Response } from "express";

// Helpers
import { generateToken } from "../helpers/auth";

// Models
import CompanyModel from '../models/company';

export async function submitCompany (req:Request, res:Response) {
  try {
    const newCompany = new CompanyModel(req.body);
    await newCompany.save();
    res.json({ message:'Company created', data:newCompany });
  } catch (err:any) {
    res.status(500).json({ message:'Server error' });
  }
}

export async function loginCompany (req:Request, res:Response) {
  try {
    const { email, password } = req.body;
    const emailResult = await CompanyModel.findOne({ email });
    if (!emailResult) { res.status(400).json({ message:'Email or password wrong' }); return; }
    else if (emailResult.password != password) { res.status(400).json({ message:'Email or password wrong' }); return; }
    const token = generateToken(emailResult._id.toString());
    res.json({ token });
  } catch (err:any) {
    res.status(500).json({ message:'Server error' });
  }
}