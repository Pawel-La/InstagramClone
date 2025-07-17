import { useThemeColors } from "@/src/hooks/useThemeColors";
import { Text, TextProps } from "react-native";

const ThemedText = ({ style, ...props }: TextProps) => {
  const themeColors = useThemeColors();

  return <Text style={[{ color: themeColors.text }, style]} {...props} />;
};

export default ThemedText;
