import { Request, Response } from "express";
import { FavoriteOrganizationUseCase } from "./FavoriteOrganizationUseCase";

export class FavoriteOrganizationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: organizationId } = request.params;
    const { userid } = request.headers;

    const favoriteOrganizationUseCase = new FavoriteOrganizationUseCase();
    const result = await favoriteOrganizationUseCase.execute({
      organizationId,
      userId: (userid as string) ?? "",
    });

    return response.status(201).json(result);
  }
}
