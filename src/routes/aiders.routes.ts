import { Router } from 'express';
import { CreateAiderController } from '../module/aiders/useCases/createAider/CreateAiderController';
import { ListAiderByIdController } from '../module/aiders/useCases/listAiderById/ListAiderByIdController';
import { ListAidersController } from '../module/aiders/useCases/listAiders/ListAidersController';
import { UpdateAiderController } from '../module/aiders/useCases/updateAider/UpdateAiderController';

const aidersRoutes = Router();

const listAidersController = new ListAidersController();
const listAiderById = new ListAiderByIdController();
const createAiderController = new CreateAiderController();
const updateAiderController = new UpdateAiderController();

aidersRoutes.get('/', listAidersController.handle);
aidersRoutes.get('/:id', listAiderById.handle);
aidersRoutes.post('/create', createAiderController.handle);
aidersRoutes.put('/:id', updateAiderController.handle);

export { aidersRoutes };
