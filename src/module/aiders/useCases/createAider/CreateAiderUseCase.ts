import { hash } from 'bcrypt';
import { prisma } from '../../../../database/prismaClient';
import { CreateAiderDTO } from '../../interfaces';

class CreateAiderUseCase {
  async execute({
    name,
    email,
    confirm_email,
    password,
    confirm_password,
  }: CreateAiderDTO) {
    const aiderAlreadyExists = await prisma.aider.findFirst({
      where: {
        email,
      },
    });

    if (aiderAlreadyExists) {
      throw new Error('There is already an aider with this email');
    }

    if (email !== confirm_email) {
      throw new Error('Email and confirm email must match');
    }

    if (password !== confirm_password) {
      throw new Error('Password and confirm password must match');
    }

    const hashedPassword = await hash(password, 10);

    await prisma.aider.create({
      data: {
        name,
        email,
        password: hashedPassword,
        interests: [],
      },
    });
  }
}

export { CreateAiderUseCase };
