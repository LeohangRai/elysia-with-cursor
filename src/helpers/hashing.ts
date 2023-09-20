import { Password } from 'bun';
type Algorithm =
  | Password.AlgorithmLabel
  | Password.Argon2Algorithm
  | Password.BCryptAlgorithm;

export function hashPassword(password: string, algorithm?: Algorithm) {
  return Bun.password.hashSync(password, algorithm);
}
