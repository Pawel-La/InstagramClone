import { useState } from 'react';

const VARIANT = {
  HOME: 'HOME',
  FOLLOWING: 'FOLLOWING',
} as const;

export type Variant = keyof typeof VARIANT;

export function usePageVariant() {
  const [variant, setVariant] = useState<Variant>('HOME');

  function showHome() {
    setVariant('HOME');
  }

  function showFollowing() {
    setVariant('FOLLOWING');
  }

  return { variant, showHome, showFollowing };
}
