// Modules
import { Request, Response } from "express";

// Helpers
import { dateToNumber } from "../helpers/moment";

// Models 
import GPSModel from '../models/gps';

export async function submitGpsLocation (req:Request, res:Response) {
  try {
    const { timestamp, latitude, longitude, formattedDate } = req.body;
    const tokenResult = req.body.tokenResult;
    const locationData = { timestamp, latitude, longitude, user_id:tokenResult, formattedDate }
    const gpsModel = new GPSModel(locationData);
    await gpsModel.save();
    res.json({ message:'Location saved', data:locationData });
  } catch (err:any) {
    res.status(500).json({ message:'Server error' });
  }
}

export async function getGPSLocationsByDriver (req:Request, res:Response) {
  try {
    const { id, date } = req.params;

    const dateInNumber = dateToNumber(date)
    const gpsResult = await GPSModel.find({ user_id:id });


    res.json({ data:gpsResult });
  } catch (err:any) {
    res.status(500).json({ message:'Server error' });
  }
}