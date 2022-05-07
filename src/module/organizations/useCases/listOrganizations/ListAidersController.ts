import { Request, Response } from 'express';
import { ListOrganizationsUseCase } from './ListOrganizationsUseCase';

class ListOrganizationsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listOrganizationsUseCase = new ListOrganizationsUseCase();

    const organizations = await listOrganizationsUseCase.execute();

    return response.status(200).json(organizations);
  }
}

export { ListOrganizationsController };
