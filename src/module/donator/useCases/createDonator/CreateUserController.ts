import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, confirm_email, password, confirm_password } =
      request.body;

    const createUserUseCase = new CreateUserUseCase();
    const result = await createUserUseCase.execute({
      name,
      email,
      confirm_email,
      password,
      confirm_password,
    });

    return response.status(201).json(result);
  }
}
