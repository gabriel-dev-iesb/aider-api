import { prisma } from "../../../../database/prismaClient";
import { AddressProps } from "../../../../types/Address";

interface ICreateOrganizationUseCase {
  name: string;
  representative: string;
  email: string;
  logo: string;
  tags: string[];
  // FIXME: Modificar aiders
  address: AddressProps;
}

export class CreateOrganizationUseCase {
  async execute({
    name,
    representative,
    email,
    logo,
    tags,
    address,
  }: ICreateOrganizationUseCase) {
    const organizationAlreadyExists = await prisma.organization.findFirst({
      where: {
        name,
      },
    });

    if (organizationAlreadyExists) {
      throw new Error("Organization already exists");
    }

    const organization = await prisma.organization.create({
      data: {
        name,
        email,
        representative,
        logo,
        tags,
        address,
      },
    });

    return organization;
  }
}
