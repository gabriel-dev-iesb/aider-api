import { Request, Response } from 'express';
import { UpdateAiderUseCase } from './UpdateAiderUseCase';

export class UpdateAiderController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, avatar_url, bio, interests, social_network } =
      request.body;

    const { id } = request.params;

    const updateAiderUseCase = new UpdateAiderUseCase();
    await updateAiderUseCase.execute({
      id,
      name,
      email,
      avatar_url,
      bio,
      interests,
      social_network,
    });

    return response.status(200).send();
  }
}
