import { prisma } from "../../../../database/prismaClient";
import { AddressProps } from "../../../../types/Address";

interface IUpdateUser {
  id: string;
  address: AddressProps;
}

export class UpdateUserUseCase {
  async execute({ id, address }: IUpdateUser) {
    const user = await prisma.donator.update({
      where: { id },
      data: {
        address,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }
}
