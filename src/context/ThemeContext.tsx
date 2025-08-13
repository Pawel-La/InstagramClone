import { createContext, PropsWithChildren } from 'react';
import useTheme from '../hooks/useTheme';
import { useContextWrapper } from './helpers';

export type ThemeProps = {
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

  return (
    <ThemeContext value={{ theme: theme, setTheme: setTheme }}>
      {children}
    </ThemeContext>
  );
}

export { ThemeProvider, useThemeContext };
