import { Context, useContext } from 'react';

function useContextWrapper<T>(
  errorMessage: string,
  context: Context<T | undefined>
): T {
  const value = useContext(context);

  if (value === undefined) {
    throw new Error(errorMessage);
  }

  return value;
}

export { useContextWrapper };
