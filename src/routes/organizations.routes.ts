import { Router } from 'express';
import { CreateOrganizationController } from '../module/organizations/useCases/createOrganization/CreateOrganizationController';
import { ListOrganizationByIdController } from '../module/organizations/useCases/listOrganizationById/ListOrganizationByIdController';
import { ListOrganizationsController } from '../module/organizations/useCases/listOrganizations/ListAidersController';
import { UpdateOrganizationController } from '../module/organizations/useCases/updateOrganization/UpdateOrganizationController';

const organizationsRoutes = Router();

const listOrganizations = new ListOrganizationsController();
const listOrganizationById = new ListOrganizationByIdController();
const createOrganizationController = new CreateOrganizationController();
const updateOrganizationController = new UpdateOrganizationController();

organizationsRoutes.get('/', listOrganizations.handle);
organizationsRoutes.get('/:id', listOrganizationById.handle);
organizationsRoutes.post('/create', createOrganizationController.handle);
organizationsRoutes.put('/:id', updateOrganizationController.handle);

export { organizationsRoutes };
