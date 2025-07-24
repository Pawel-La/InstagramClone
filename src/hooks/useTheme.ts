import { useEffect, useState } from "react";
import { Appearance } from "react-native";

export default function useTheme() {
  const [theme, setTheme] = useState(Appearance.getColorScheme() ?? "dark");

  useEffect(() => {
    const eventSubscription = Appearance.addChangeListener(
      ({ colorScheme }) => {
        setTheme(colorScheme ?? "dark");
      }
    );

    return () => {
      eventSubscription.remove();
    };
  }, [theme]);

  return theme;
}
