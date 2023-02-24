// Modules
import { Router } from 'express';

// Controllers
import { 
  getGPSLocationsByDriver,
  submitGpsLocation
} from '../controllers/gps';

// Middlewares
import { validateTokenMiddleware } from '../middlewares/user';

const gpsRouter = Router();

gpsRouter.post('/driver/:id/:date', [ validateTokenMiddleware ], getGPSLocationsByDriver);

gpsRouter.post('/', validateTokenMiddleware, submitGpsLocation);

export default gpsRouter;