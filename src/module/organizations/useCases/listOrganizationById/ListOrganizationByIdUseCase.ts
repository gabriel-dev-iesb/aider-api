import { prisma } from '../../../../database/prismaClient';

class ListOrganizationByIdUseCase {
  async execute(id: string) {
    const organization = await prisma.organization.findFirst({
      where: {
        id,
      },
    });

    return organization;
  }
}

export { ListOrganizationByIdUseCase };
