import { prisma } from '../../../../database/prismaClient';
import { UpdateCauseDTO } from '../../interfaces';

class UpdateCauseUseCase {
  async execute({
    id,
    title,
    description,
    start_date,
    end_date,
    href,
  }: UpdateCauseDTO) {
    await prisma.causes.update({
      where: { id },
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

export { UpdateCauseUseCase };
