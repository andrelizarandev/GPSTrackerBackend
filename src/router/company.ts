// Modules
import { Router } from "express";

// Controllers
import { 
  loginCompany, 
  submitCompany 
} from "../controllers/company";

// Middlewares
import { loginCompanyValuesMiddleware, submitCompanyValuesMiddleware } from "../middlewares/company";

const companyRouter = Router();

companyRouter.post('/', submitCompanyValuesMiddleware, submitCompany);
companyRouter.post('/login', loginCompanyValuesMiddleware, loginCompany);
export default companyRouter;