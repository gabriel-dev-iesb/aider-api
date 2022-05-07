import { prisma } from '../../../../database/prismaClient';
import { CreateCauseDTO } from '../../interfaces';

class CreateCauseUseCase {
  async execute({
    title,
    description,
    start_date,
    end_date,
    href,
  }: CreateCauseDTO) {
    const organizationAlreadyExists = await prisma.causes.findFirst({
      where: { title },
    });

    if (organizationAlreadyExists) {
      throw new Error(`Cause with title: ${title} already exists`);
    }

    await prisma.causes.create({
      data: {
        title,
        description,
        start_date,
        end_date,
        href,
      },
    });
  }
}

export { CreateCauseUseCase };
