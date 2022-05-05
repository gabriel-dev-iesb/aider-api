import { Request, Response } from "express";
import { GetUserUseCase } from "./GetUserUseCase";

export class GetUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const getUserUseCase = new GetUserUseCase();
    const user = await getUserUseCase.execute(id);

    return response.status(200).json(user);
  }
}
