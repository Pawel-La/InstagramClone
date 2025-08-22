import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { Appearance } from 'react-native';

import { useContextWrapper } from './helpers';
import { darkTheme, lightTheme } from '../utils/theme';

type ThemeProps = {
  text: string;
  background: string;
  background_hovered: string;
  primary: string;
  secondary: string;
  link_primary: string;
  link_secondary: string;
  border: string;
};

type ThemeContextProps =
  | {
      theme: ThemeProps;
      setTheme: (theme: 'light' | 'dark') => void;
    }
  | undefined;

const ThemeContext = createContext<ThemeContextProps>(undefined);
ThemeContext.displayName = 'ThemeContext';

function useThemeContext() {
  return useContextWrapper(ThemeContext);
}

function ThemeProvider({ children }: PropsWithChildren) {
  const { theme, setTheme } = useTheme();

  return <ThemeContext value={{ theme: theme, setTheme: setTheme }}>{children}</ThemeContext>;
}

function useTheme() {
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
    const eventSubscription = Appearance.addChangeListener(({ colorScheme }) => {
      setIsDark(colorScheme === 'dark');
    });

    return () => {
      eventSubscription.remove();
    };
  }, [isDark]);

  return { theme, setTheme };
}

export { ThemeProvider, useThemeContext };
