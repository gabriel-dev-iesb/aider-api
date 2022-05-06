import { Request, Response } from 'express';
import { ListAiderByIdUseCase } from './ListAiderByIdUseCase';

class ListAiderByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const listAiderByIdUseCase = new ListAiderByIdUseCase();

    const aider = await listAiderByIdUseCase.execute(id);

    return response.status(200).json(aider);
  }
}

export { ListAiderByIdController };
