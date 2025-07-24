import { useThemeContext } from "@/src/context/ThemeContext";
import { Colors } from "@/src/utils/constants";
import { MaterialIcons } from "@expo/vector-icons";
import type { ComponentProps } from "react";

type ThemedIconProps = ComponentProps<typeof MaterialIcons>;

const ThemedIcon = ({ color, ...props }: ThemedIconProps) => {
  const theme = useThemeContext();
  const themeColors = Colors[theme];
  const iconColor = color ?? themeColors.text.default;

  return <MaterialIcons color={iconColor} {...props} />;
};

export default ThemedIcon;
