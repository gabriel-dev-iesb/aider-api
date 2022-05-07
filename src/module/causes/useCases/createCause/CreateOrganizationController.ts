import { Request, Response } from 'express';
import { CreateCauseUseCase } from './CreateCauseUseCase';

class CreateCauseController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, description, start_date, end_date, href } = request.body;

    const createCauseUseCase = new CreateCauseUseCase();

    await createCauseUseCase.execute({
      title,
      description,
      start_date,
      end_date,
      href,
    });

    return response.status(201).send();
  }
}

export { CreateCauseController };
