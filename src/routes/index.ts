import { Router } from 'express';
import { aidersRoutes } from './aiders.routes';
import { organizationsRoutes } from './organizations.routes';

const routes = Router();
// const authenticateUserController = new AuthenticateUserController();

// routes.post("/auth", authenticateUserController.handle);

routes.use('/aiders', aidersRoutes);
routes.use('/organizations', organizationsRoutes);

export { routes };
