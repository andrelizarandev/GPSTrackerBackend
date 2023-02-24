// Modules
import { model, Schema } from "mongoose";

const UserSchema = new Schema ({ 
  username: { type:String, required:true },
  password: { type:String, required:true },
  fullname: { type:String, required:true },
  status: { type:Boolean, default:true },
  companyId: String
});

export default model('user', UserSchema);