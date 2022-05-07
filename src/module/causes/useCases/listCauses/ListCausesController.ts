import { Request, Response } from 'express';
import { ListCausesUseCase } from './ListCausesUseCase';

class ListCausesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCausesUseCase = new ListCausesUseCase();

    const causes = await listCausesUseCase.execute();

    return response.status(200).json(causes);
  }
}

export { ListCausesController };
