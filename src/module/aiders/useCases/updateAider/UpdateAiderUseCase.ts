import { prisma } from '../../../../database/prismaClient';
import { UpdateAiderDTO } from '../../interfaces';

interface UpdateAider extends UpdateAiderDTO {
  id: string;
}

class UpdateAiderUseCase {
  async execute({
    id,
    name,
    email,
    bio,
    avatar_url,
    interests,
    social_network,
  }: UpdateAider) {
    await prisma.aider.update({
      where: {
        id,
      },
      data: {
        name,
        email,
        bio,
        avatar_url,
        interests,
        social_network,
      },
    });
  }
}

export { UpdateAiderUseCase };
