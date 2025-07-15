import { Text, TextProps } from "react-native";
import { useThemeColors } from "@/hooks/useThemeColors";

const ThemedText = ({ style, ...props }: TextProps) => {
  const themeColors = useThemeColors();

  return <Text style={[{ color: themeColors.text }, style]} {...props} />;
};

export default ThemedText;
