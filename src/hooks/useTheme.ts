import { useEffect, useState } from 'react';
import { Appearance } from 'react-native';
import { darkTheme, lightTheme } from '../utils/theme';

export default function useTheme() {
  const [isDark, setIsDark] = useState(Appearance.getColorScheme() === 'dark');
  const theme = isDark ? darkTheme : lightTheme;

  function setTheme(theme: 'light' | 'dark') {
    if (theme === 'dark') {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }

  useEffect(() => {
    const eventSubscription = Appearance.addChangeListener(
      ({ colorScheme }) => {
        setIsDark(colorScheme === 'dark');
      }
    );

    return () => {
      eventSubscription.remove();
    };
  }, [isDark]);

  return { theme, setTheme };
}
