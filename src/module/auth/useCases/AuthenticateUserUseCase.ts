import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { prisma } from '../../../database/prismaClient';

interface ILogin {
  email: string;
  password: string;
}

class AuthenticateUserUseCase {
  async execute({ email, password }: ILogin) {
    const aider = await prisma.aider.findFirst({
      where: {
        email,
      },
    });

    if (!aider) {
      throw new Error('Invalid email or password');
    }

    const isPasswordValid = await compare(password, aider.password);

    if (!isPasswordValid) {
      throw new Error('Invalid email or password');
    }

    const { name, avatar_url } = aider;

    if (!process.env.JWT_KEY) {
      throw new Error('Missing JWT_KEY environment variable');
    }

    const token = sign({ name, email, avatar_url }, process.env.JWT_KEY, {
      subject: aider.id,
      expiresIn: '1d',
    });

    return token;
  }
}

export { AuthenticateUserUseCase };
