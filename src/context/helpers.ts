import { Context, useContext } from 'react';

function useContextWrapper<T>(
  message: string,
  context: Context<T | undefined>
): T {
  const value = useContext(context);

  if (value === undefined) {
    throw new Error(message);
  }

  return value;
}

export { useContextWrapper };
