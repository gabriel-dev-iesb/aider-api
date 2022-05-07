import { Request, Response } from 'express';
import { UpdateCauseUseCase } from './UpdateCauseUseCase';

class UpdateCauseController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { title, description, start_date, end_date, href } = request.body;

    const updateCauseUseCase = new UpdateCauseUseCase();

    await updateCauseUseCase.execute({
      id,
      title,
      description,
      start_date,
      end_date,
      href,
    });

    return response.status(201).send();
  }
}

export { UpdateCauseController };
