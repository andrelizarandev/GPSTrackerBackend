// Modules
import { body } from "express-validator";

// Middleware
import { validateValuesMiddleWare } from "./general";

export const getGPSLocationsByDriverValuesMiddleware = [
  body('_id').isString(),
  validateValuesMiddleWare
]