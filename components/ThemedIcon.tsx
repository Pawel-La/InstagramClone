import { MaterialIcons } from "@expo/vector-icons";
import { useThemeColors } from "@/hooks/useThemeColors";
import type { ComponentProps } from "react";

type MaterialIconsProps = ComponentProps<typeof MaterialIcons>;

const ThemedIcon = ({ color, ...props }: MaterialIconsProps) => {
  const themeColors = useThemeColors();
  const iconColor = color ?? themeColors.text;

  return <MaterialIcons color={iconColor} {...props} />;
};

export default ThemedIcon;
