import { useEffect, useState } from 'react';
import { useWindowDimensions } from 'react-native';

const SCREEN_SIZE = {
  LG: 'LG',
  MD: 'MD',
  SM: 'SM',
  XS: 'XS',
} as const;

export type ScreenSize = keyof typeof SCREEN_SIZE;

export default function useScreenSize() {
  const [screenSize, setScreenSize] = useState<ScreenSize>('LG');
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width > 1264) {
      setScreenSize('LG');
    } else if (width > 1160) {
      setScreenSize('MD');
    } else if (width > 768) {
      setScreenSize('SM');
    } else {
      setScreenSize('XS');
    }
  }, [width]);

  return { screenWidth: width, screenSize: screenSize };
}
