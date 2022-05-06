import { Router } from 'express';
import { CreateOrganizationController } from '../module/organizations/useCases/createOrganization/CreateOrganizationController';

const organizationsRoutes = Router();

const createOrganizationController = new CreateOrganizationController();

organizationsRoutes.post('/create', createOrganizationController.handle);

export { organizationsRoutes };
