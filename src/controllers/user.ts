// Modules
import { Request, Response } from "express";

// Helpers
import { generateToken } from "../helpers/auth";

// Models
import UserModel from '../models/user';

export async function getUsersByCompany (req:Request, res:Response) {
  try {
    const { tokenResult } = req.body;
    const usersResult = await UserModel.find({ companyId:tokenResult });
    res.json({ data:usersResult });
  } catch (error:any) {
    res.status(500).json({ message:'Server error' });
  }
}

export async function submitUser (req:Request, res:Response) {
  try {
    const { username, password, fullname, tokenResult } = req.body;
    const payload = { username, password, fullname, companyId:tokenResult };
    const newUser = new UserModel(payload);
    await newUser.save();
    res.json({ message:'User Created', data:newUser });
  } catch (error:any) {
    res.status(500).json({ message:'Server error' });
  }
}

export async function loginController (req:Request, res:Response) {
  try {
    const { username, password } = req.body;
    const result = await UserModel.findOne({ username });
    if (!result) { res.status(400).json({ message:'User or password wrong '}); return; }
    else if (result.password != password) { res.status(400).json({ message:'User or password wrong' }); return; }
    const token = generateToken(result._id.toString());
    res.json({ token });
  } catch (error:any) {
    res.status(500).json({ message:'Server error' });
  }
}

export function validateTokenController (req:Request, res:Response) {
  try {
    const token = generateToken(req.body.tokenResult);
    res.json({ token });
  } catch (error:any) {
    res.status(500).json({ message:'Server error' });
  }
}