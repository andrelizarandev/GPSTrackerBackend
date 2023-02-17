// Modules
import { model, Schema } from "mongoose";

const GPSSchema = new Schema ({ 
  timestamp: String,
  latitude: Number,
  longitude: Number,
  user_id: String
});

export default model('gpsLocation', GPSSchema);