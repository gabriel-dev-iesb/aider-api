import { prisma } from '../../../../database/prismaClient';

class ListOrganizationsUseCase {
  async execute() {
    const organizations = await prisma.organization.findMany();

    return organizations;
  }
}

export { ListOrganizationsUseCase };
