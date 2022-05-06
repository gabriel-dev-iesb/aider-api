import { prisma } from '../../../../database/prismaClient';

class ListAidersUseCase {
  async execute() {
    const aiders = await prisma.aider.findMany({
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

export { ListAidersUseCase };
