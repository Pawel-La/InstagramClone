import { Context, useContext } from 'react';

function useContextWrapper<T>(context: Context<T | undefined>): T {
  const value = useContext(context);

  if (context.displayName === undefined) {
    throw new Error('Context must have a display name');
  }

  if (value === undefined) {
    throw new Error(`${context.displayName} must be used within its provider`);
  }

  return value;
}

export { useContextWrapper };
