import { Router } from 'express';
import { AuthenticateUserController } from '../module/auth/useCases/AuthenticateUserController';
import { aidersRoutes } from './aiders.routes';
import { causesRoutes } from './causes.routes';
import { organizationsRoutes } from './organizations.routes';

const routes = Router();
const authenticateUserController = new AuthenticateUserController();

routes.post('/login', authenticateUserController.handle);
routes.use('/aiders', aidersRoutes);
routes.use('/organizations', organizationsRoutes);
routes.use('/causes', causesRoutes);

export { routes };
