import { useThemeColors } from "@/src/hooks/useThemeColors";
import { View, ViewProps } from "react-native";

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
