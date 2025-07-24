import { useState } from "react";

export enum Variant {
  "home",
  "following",
}

export default function usePageVariant() {
  const [variant, setVariant] = useState(Variant.home);

  function showHome() {
    setVariant(Variant.home);
  }

  function showFollowing() {
    setVariant(Variant.following);
  }

  return { variant, showHome, showFollowing };
}
