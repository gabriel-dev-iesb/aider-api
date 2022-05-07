import { prisma } from '../../../../database/prismaClient';

class ListCausesUseCase {
  async execute() {
    const causes = await prisma.causes.findMany();

    return causes;
  }
}

export { ListCausesUseCase };
