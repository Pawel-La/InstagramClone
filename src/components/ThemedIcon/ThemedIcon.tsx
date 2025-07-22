import { useThemeColors } from "@/src/hooks/useThemeColors";
import { MaterialIcons } from "@expo/vector-icons";
import type { ComponentProps } from "react";

type ThemedIconProps = ComponentProps<typeof MaterialIcons>;

const ThemedIcon = ({ color, ...props }: ThemedIconProps) => {
  const themeColors = useThemeColors();
  const iconColor = color ?? themeColors.text.default;

  return <MaterialIcons color={iconColor} {...props} />;
};

export default ThemedIcon;
