// Modules
import { Request, Response } from "express";

// Models 
import GPSModel from '../models/gps';

export async function submitGpsLocation (req:Request, res:Response) {
  try {
    const { timestamp, latitude, longitude } = req.body;
    const tokenResult = req.body.tokenResult;
    const locationData = { timestamp, latitude, longitude, user_id:tokenResult }
    const gpsModel = new GPSModel(locationData);
    await gpsModel.save();
    res.json({ message:'Location saved', data:locationData });
  } catch (err:any) {
    res.status(500).json({ message:'Server error' });
  }
}