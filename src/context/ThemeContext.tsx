import { createContext, PropsWithChildren, useContext } from "react";
import { ColorSchemeName } from "react-native";
import useTheme from "../hooks/useTheme";

const ThemeContext = createContext<ColorSchemeName>(undefined);

export function useThemeContext() {
  const theme = useContext(ThemeContext);

  if (theme === undefined) {
    throw new Error("useThemeContext must be used with ThemeContext");
  }

  return theme ?? "dark";
}

export function ThemeProvider({ children }: PropsWithChildren) {
  const theme = useTheme();

  return <ThemeContext value={theme}>{children}</ThemeContext>;
}
