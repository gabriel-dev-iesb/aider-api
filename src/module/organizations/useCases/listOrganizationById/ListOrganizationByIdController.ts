import { Request, Response } from 'express';
import { ListOrganizationByIdUseCase } from './ListOrganizationByIdUseCase';

class ListOrganizationByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const listOrganizationByIdUseCase = new ListOrganizationByIdUseCase();

    const organization = await listOrganizationByIdUseCase.execute(id);

    return response.status(200).json(organization);
  }
}

export { ListOrganizationByIdController };
