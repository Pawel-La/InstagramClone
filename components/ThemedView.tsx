import { View, ViewProps } from "react-native";
import { useThemeColors } from "@/hooks/useThemeColors";

const ThemedView = ({ style, ...props }: ViewProps) => {
  const themeColors = useThemeColors();

  return (
    <View
      style={[{ backgroundColor: themeColors.background }, style]}
      {...props}
    />
  );
};

export default ThemedView;
