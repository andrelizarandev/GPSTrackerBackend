// Modules
import { Router } from 'express';

// Controllers
import { 
  loginController, 
  submitUser, 
  validateTokenController 
} from '../controllers/user';
import { validateCompanyId } from '../middlewares/company';

// Middlewares
import { 
  logInValueMiddleware, 
  submitDriverMiddelware, validateTokenMiddleware
} from '../middlewares/user';

const userRouter = Router();

// TODO: Validar que el id dentro del token exista en la tabla de companies
userRouter.get('/', validateTokenMiddleware, )

userRouter.post('/', [ validateTokenMiddleware, ...submitDriverMiddelware ], submitUser);

userRouter.post('/login', logInValueMiddleware, loginController);

userRouter.get('/validate', validateTokenMiddleware, validateTokenController);

export default userRouter;