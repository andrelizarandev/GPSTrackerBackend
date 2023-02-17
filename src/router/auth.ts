// Modules
import { Router } from 'express';

// Controllers
import { loginController, validateTokenController } from '../controllers/auth';

// Middlewares
import { logInValueMiddleware, validateTokenMiddleware } from '../middlewares/auth';

const authRouter = Router();

authRouter.post('/login', logInValueMiddleware, loginController);
authRouter.get('/validate', validateTokenMiddleware, validateTokenController);

export default authRouter;