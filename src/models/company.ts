// Modules
import { model, Schema } from "mongoose";

const CompanySchema = new Schema ({ 
  socialReason:{ type:String, required:true },
  rfc:{ type:String, required:true },
  contactNumber:{ type:String, required:true },
  email:{ type:String, required:true },
  password:{ type:String, required:true },
});

export default model('company', CompanySchema);