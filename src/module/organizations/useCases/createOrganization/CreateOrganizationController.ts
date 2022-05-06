import { Request, Response } from 'express';
import { CreateOrganizationUseCase } from './CreateOrganizationUseCase';

class CreateOrganizationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      representative,
      logo,
      email,
      categories,
      social_network,
      address,
    } = request.body;

    const createOrganizationUseCase = new CreateOrganizationUseCase();

    await createOrganizationUseCase.execute({
      name,
      representative,
      logo,
      email,
      categories,
      social_network,
      address,
    });

    return response.status(201).send();
  }
}

export { CreateOrganizationController };
