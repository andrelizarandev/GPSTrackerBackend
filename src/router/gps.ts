// Modules
import { Router } from 'express';

// Controllers
import { 
  submitGpsLocation
} from '../controllers/gps';

// Middlewares
import { validateTokenMiddleware } from '../middlewares/auth';

const gpsRouter = Router();

gpsRouter.post('/', validateTokenMiddleware, submitGpsLocation)

export default gpsRouter;