import { Request, Response } from 'express';
import { ListAidersUseCase } from './ListAidersUseCase';

class ListAidersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAidersUseCase = new ListAidersUseCase();

    const aiders = await listAidersUseCase.execute();

    return response.status(200).json(aiders);
  }
}

export { ListAidersController };
