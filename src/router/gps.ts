// Modules
import { Router } from 'express';

// Controllers
import { 
  getGPSLocationsByDriver,
  submitGpsLocation
} from '../controllers/gps';

// Middlewares
import { validateTokenMiddleware } from '../middlewares/user';
import { getGPSLocationsByDriverValuesMiddleware } from '../middlewares/gps';

const gpsRouter = Router();

gpsRouter.post(
  '/driver', 
  [ validateTokenMiddleware, ...getGPSLocationsByDriverValuesMiddleware ],
  getGPSLocationsByDriver
);

gpsRouter.post('/', validateTokenMiddleware, submitGpsLocation);

export default gpsRouter;