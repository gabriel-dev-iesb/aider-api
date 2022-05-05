import { prisma } from "../../../../database/prismaClient";

export class GetUserUseCase {
  async execute(id: string) {
    const user = await prisma.donator.findUnique({
      where: { id },
    });

    const userFavorites = await prisma.organizationDonators.findMany({
      where: {
        donatorId: (user?.id as string) ?? "",
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    return {
      ...user,
      favorites: userFavorites,
    };
  }
}
