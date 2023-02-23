// Modules
import { model, Schema } from "mongoose";

const UserSchema = new Schema ({ 
  username: { type:String, required:true },
  password: { type:String, required:true },
  fullname: { type:String, required:true },
  companyId: String
});

export default model('user', UserSchema);