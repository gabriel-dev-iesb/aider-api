import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface ICreateUserUseCase {
  name: string;
  email: string;
  confirm_email: string;
  password: string;
  confirm_password: string;
}

export class CreateUserUseCase {
  async execute({
    name,
    email,
    confirm_email,
    password,
    confirm_password,
  }: ICreateUserUseCase) {
    const userAlreadyExists = await prisma.donator.findUnique({
      where: {
        email,
      },
    });

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    if (email !== confirm_email) {
      throw new Error("Email and confirm email must match");
    }

    if (password !== confirm_password) {
      throw new Error("Password and confirm password must match");
    }

    const hashedPassword = await hash(password, 10);

    const user = await prisma.donator.create({
      data: {
        name,
        email,
        password: hashedPassword,
        interests: [],
      },
    });

    return user;
  }
}
