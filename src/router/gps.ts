// Modules
import { Router } from 'express';

// Controllers
import { 
  getDriversByCompany,
  submitGpsLocation
} from '../controllers/gps';

// Middlewares
import { validateTokenMiddleware } from '../middlewares/user';

const gpsRouter = Router();

gpsRouter.get('/', validateTokenMiddleware, getDriversByCompany);
gpsRouter.post('/', validateTokenMiddleware, submitGpsLocation);

export default gpsRouter;