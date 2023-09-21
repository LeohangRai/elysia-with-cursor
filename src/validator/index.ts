import { TObject } from '@sinclair/typebox';
import { TypeCompiler } from '@sinclair/typebox/compiler';

/* this file is not in use at the moment */
type IValidatorFactory<T> = {
  schema: TObject;
  verify: (data: T) => T;
};

export const ValidatorFactory = <T>(schema: TObject): IValidatorFactory<T> => {
  const compilationResult = TypeCompiler.Compile(schema);
  const verify = (data: T): T => {
    if (compilationResult.Check(data)) {
      return data;
    }
    throw new Error(
      JSON.stringify(
        [...compilationResult.Errors(data)].map(({ path, message }) => ({
          path,
          message
        }))
      )
    );
  };
  return { schema, verify };
};
