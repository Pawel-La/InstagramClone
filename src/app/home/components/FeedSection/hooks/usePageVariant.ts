import { useState } from 'react';

export const VARIANT = {
  HOME: 'HOME',
  FOLLOWING: 'FOLLOWING',
} as const;

export type Variant = keyof typeof VARIANT;

export default function usePageVariant() {
  const [variant, setVariant] = useState<Variant>(VARIANT.HOME);

  function showHome() {
    setVariant(VARIANT.HOME);
  }

  function showFollowing() {
    setVariant(VARIANT.FOLLOWING);
  }

  return { variant, showHome, showFollowing };
}
