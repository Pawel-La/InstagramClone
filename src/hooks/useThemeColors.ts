import { Colors } from "@/src/utils/constants";
import { useColorScheme } from "react-native";

export function useThemeColors() {
  const theme = useColorScheme() ?? "light";

  return Colors[theme];
}
