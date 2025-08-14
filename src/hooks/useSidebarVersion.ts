import { useEffect, useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { SidebarVersion } from '../context/SidebarVersionContext';

export default function useSidebarVersion() {
  const [version, setVersion] = useState<SidebarVersion>('LG');
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width > 1264) {
      setVersion('LG');
    } else if (width > 1160) {
      setVersion('MD');
      // todo update 760 value to sth more accurate
    } else if (width > 760) {
      setVersion('SM');
    } else {
      setVersion('XS');
    }
  }, [width]);

  return version;
}
