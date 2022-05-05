import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../database/prismaClient";

interface IAuthenticateUserUseCase {
  email: string;
  password: string;
}

export class AuthenticateUserUseCase {
  async execute({ email, password }: IAuthenticateUserUseCase) {
    const user = await prisma.donator.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error("Invalid email or password");
    }

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error("Invalid email or password");
    }

    if (!user.isActive) {
      throw new Error("Account not verified");
    }

    const { name, bio, avatar_url, address } = user;

    if (!process.env.JWT_KEY) {
      throw new Error("Missing JWT_KEY environment variable");
    }

    const token = sign(
      { name, email, bio, avatar_url, address },
      process.env.JWT_KEY,
      {
        subject: user.id,
        expiresIn: "1d",
      }
    );

    return token;
  }
}
