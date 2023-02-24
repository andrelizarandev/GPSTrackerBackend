// Modules
import { Router } from 'express';

// Controllers
import { 
  changeUserStatus,
  getUsersByCompany,
  loginController, 
  submitUser, 
  validateTokenController 
} from '../controllers/user';

// Middlewares
import { 
  logInValueMiddleware, 
  submitDriverMiddelware, validateTokenMiddleware
} from '../middlewares/user';

const driverRouter = Router();

driverRouter.get('/', validateTokenMiddleware, getUsersByCompany);

driverRouter.post('/', [ validateTokenMiddleware, ...submitDriverMiddelware ], submitUser);

driverRouter.post('/login', logInValueMiddleware, loginController);

driverRouter.get('/validate', validateTokenMiddleware, validateTokenController);

driverRouter.patch('/change-status/:id', [validateTokenMiddleware], changeUserStatus);

export default driverRouter;