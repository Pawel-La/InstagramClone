import { useThemeContext } from "@/src/context/ThemeContext";
import { Colors } from "@/src/utils/constants";
import { Text, TextProps } from "react-native";

const ThemedText = ({ style, ...props }: TextProps) => {
  const theme = useThemeContext();
  const themeColors = Colors[theme];

  return (
    <Text style={[{ color: themeColors.text.default }, style]} {...props} />
  );
};

export default ThemedText;
