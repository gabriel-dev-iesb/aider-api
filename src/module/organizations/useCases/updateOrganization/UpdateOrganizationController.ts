import { Request, Response } from 'express';
import { UpdateOrganizationUseCase } from './UpdateOrganizationUseCase';

class UpdateOrganizationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const {
      name,
      representative,
      logo,
      email,
      categories,
      social_network,
      address,
    } = request.body;

    const updateOrganizationUseCase = new UpdateOrganizationUseCase();

    await updateOrganizationUseCase.execute({
      id,
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

export { UpdateOrganizationController };
