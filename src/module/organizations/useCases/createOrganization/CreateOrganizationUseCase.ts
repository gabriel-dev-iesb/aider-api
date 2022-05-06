import { prisma } from '../../../../database/prismaClient';
import { CreateOrganizationDTO } from '../../interfaces';

class CreateOrganizationUseCase {
  async execute({
    name,
    representative,
    logo,
    email,
    categories,
    social_network,
    address,
  }: CreateOrganizationDTO) {
    const organizationAlreadyExists = await prisma.organization.findFirst({
      where: { name },
    });

    if (organizationAlreadyExists) {
      throw new Error(`Organization ${name} already exists`);
    }

    await prisma.organization.create({
      data: {
        name,
        representative,
        logo,
        email,
        categories,
        social_network,
        address,
      },
    });
  }
}

export { CreateOrganizationUseCase };
