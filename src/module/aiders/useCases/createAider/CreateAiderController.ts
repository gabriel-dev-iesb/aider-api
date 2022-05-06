import { Request, Response } from 'express';
import { CreateAiderUseCase } from './CreateAiderUseCase';

export class CreateAiderController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, confirm_email, password, confirm_password } =
      request.body;

    const createAiderUseCase = new CreateAiderUseCase();
    await createAiderUseCase.execute({
      name,
      email,
      confirm_email,
      password,
      confirm_password,
    });

    return response.status(201).send();
  }
}
