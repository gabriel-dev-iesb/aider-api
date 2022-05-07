import { prisma } from '../../../../database/prismaClient';

class ListCauseByIdUseCase {
  async execute(id: string) {
    const cause = await prisma.causes.findFirst({
      where: {
        id,
      },
    });

    return cause;
  }
}

export { ListCauseByIdUseCase };
