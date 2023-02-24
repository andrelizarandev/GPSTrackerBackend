// Modules
import { Router } from "express";

// Controllers
import { 
  loginCompany, 
  submitCompany 
} from "../controllers/company";

// Middlewares
import { 
  loginCompanyValuesMiddleware, 
  submitCompanyValuesMiddleware 
} from "../middlewares/company";
import { validateTokenMiddleware } from "../middlewares/user";

const companyRouter = Router();

companyRouter.get('/', [validateTokenMiddleware], );
companyRouter.post('/', submitCompanyValuesMiddleware, submitCompany);
companyRouter.post('/login', loginCompanyValuesMiddleware, loginCompany);
export default companyRouter;