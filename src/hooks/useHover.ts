import { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';

type Hoverable = HTMLElement | null;

export default function useHover() {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<View | null>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const node = ref.current as Hoverable;

    if (node) {
      node.addEventListener('mouseenter', handleMouseEnter);
      node.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        node.removeEventListener('mouseenter', handleMouseEnter);
        node.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  return { isHovered, ref };
}
