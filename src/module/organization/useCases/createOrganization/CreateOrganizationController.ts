import { Request, Response } from "express";
import { CreateOrganizationUseCase } from "./CreateOrganizationUseCase";

export class CreateOrganizationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, representative, email, logo, tags, address } = request.body;

    const createOrganizationUseCase = new CreateOrganizationUseCase();

    const organization = await createOrganizationUseCase.execute({
      name,
      representative,
      email,
      logo,
      tags,
      address,
    });

    return response
      .status(201)
      .json({ message: "Organization Created", organization });
  }
}
