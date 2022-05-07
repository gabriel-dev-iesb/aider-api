import { Request, Response } from 'express';
import { ListCauseByIdUseCase } from './ListCauseByIdUseCase';

class ListCauseByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const listCauseByIdUseCase = new ListCauseByIdUseCase();

    const cause = await listCauseByIdUseCase.execute(id);

    return response.status(200).json(cause);
  }
}

export { ListCauseByIdController };
