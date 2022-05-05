import { prisma } from "../../../../database/prismaClient";

// FIXME: MOVER PARA ORGANIZATION

interface IFavoriteOrganizationUseCase {
  organizationId: string;
  userId: string;
}

export class FavoriteOrganizationUseCase {
  async execute({ organizationId, userId }: IFavoriteOrganizationUseCase) {
    const donator = await prisma.donator.findFirst({
      where: {
        id: userId,
      },
    });

    const organization = await prisma.organization.findFirst({
      where: {
        id: organizationId,
      },
    });

    if (!donator) {
      throw new Error("User does not exist");
    }

    if (!organization) {
      throw new Error("Organization does not exist");
    }

    const favorite = await prisma.organizationDonators.create({
      data: {
        organizationId: organizationId,
        donatorId: userId,
      },
    });

    return favorite;
  }
}
