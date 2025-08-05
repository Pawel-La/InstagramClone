import { createContext, PropsWithChildren, useContext } from 'react';
import useTheme from '../hooks/useTheme';

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

export function useThemeContext() {
  const theme = useContext(ThemeContext);

  if (theme === undefined) {
    throw new Error('useThemeContext must be used with ThemeContext');
  }

  return theme;
}

export function ThemeProvider({ children }: PropsWithChildren) {
  const { theme, setTheme } = useTheme();

  return (
    <ThemeContext value={{ theme: theme, setTheme: setTheme }}>
      {children}
    </ThemeContext>
  );
}
