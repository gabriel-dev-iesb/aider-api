import { prisma } from '../../../../database/prismaClient';
import { UpdateOrganizationDTO } from '../../interfaces';

class UpdateOrganizationUseCase {
  async execute({
    id,
    name,
    representative,
    logo,
    email,
    categories,
    social_network,
    address,
  }: UpdateOrganizationDTO) {
    await prisma.organization.update({
      where: { id },
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

export { UpdateOrganizationUseCase };
