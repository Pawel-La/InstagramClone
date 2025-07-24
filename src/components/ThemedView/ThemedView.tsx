import { useThemeContext } from "@/src/context/ThemeContext";
import { Colors } from "@/src/utils/constants";
import { View, ViewProps } from "react-native";

const ThemedView = ({ style, ...props }: ViewProps) => {
  const theme = useThemeContext();
  const themeColors = Colors[theme];

  return (
    <View
      style={[{ backgroundColor: themeColors.background }, style]}
      {...props}
    />
  );
};

export default ThemedView;
