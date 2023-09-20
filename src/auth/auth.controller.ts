import { hashPassword } from '../helpers/hashing';
import { RegistrationContext } from './interfaces/registration-context.interface';
import { LoginContext } from './interfaces/login-context.interface';

export async function register({ body, db }: RegistrationContext) {
  try {
    const { email, password, confirmPassword } = body;
    if (password !== confirmPassword) {
      return {
        error: 'Password and confirmPassword do not match'
      };
    }
    await db.user.create({
      data: {
        email,
        password: hashPassword(password)
      }
    });
    return {
      message: 'User registered successfully'
    };
  } catch (e: any) {
    return {
      error: e.message
    };
  }
}

export async function login({ body, db }: LoginContext) {
  try {
    const { email, password } = body;
    const user = await db.user.findUnique({
      where: {
        email
      }
    });
    if (!user) {
      return {
        error: 'User not found'
      };
    }
    const isPasswordValid = Bun.password.verifySync(password, user.password);
    if (!isPasswordValid) {
      return {
        error: 'Invalid password'
      };
    }
    return {
      message: 'User logged in successfully'
    };
  } catch (e: any) {
    return {
      error: e.message
    };
  }
}
