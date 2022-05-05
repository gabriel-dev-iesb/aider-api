import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

export class UpdateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { address } = request.body;

    const updateUserUseCase = new UpdateUserUseCase();

    const user = await updateUserUseCase.execute({
      id,
      address,
    });

    return response.status(200).json({ message: "User updated", user });
  }
}
