import { Router } from 'express';
import { CreateCauseController } from '../module/causes/useCases/createCause/CreateOrganizationController';
import { ListCauseByIdController } from '../module/causes/useCases/listCauseById/ListCauseByIdController';
import { ListCausesController } from '../module/causes/useCases/listCauses/ListCausesController';
import { UpdateCauseController } from '../module/causes/useCases/updateCause/UpdateCauseController';

const causesRoutes = Router();

const listCauses = new ListCausesController();
const listCauseById = new ListCauseByIdController();
const createCauseController = new CreateCauseController();
const updateCauseController = new UpdateCauseController();

causesRoutes.get('/', listCauses.handle);
causesRoutes.get('/:id', listCauseById.handle);
causesRoutes.post('/create', createCauseController.handle);
causesRoutes.put('/:id', updateCauseController.handle);

export { causesRoutes };
