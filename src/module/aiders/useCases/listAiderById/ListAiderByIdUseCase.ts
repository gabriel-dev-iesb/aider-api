import { prisma } from '../../../../database/prismaClient';

class ListAiderByIdUseCase {
  async execute(id: string) {
    const aiders = await prisma.aider.findFirst({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        isActive: true,
        avatar_url: true,
        bio: true,
        address: true,
        social_network: true,
        interests: true,
      },
    });

    return aiders;
  }
}

export { ListAiderByIdUseCase };
