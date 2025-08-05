import { useThemeContext } from '@/src/context/ThemeContext';
import { Text, TextProps } from 'react-native';

const ThemedText = ({ style, ...props }: TextProps) => {
  const { theme: theme } = useThemeContext();

  return <Text style={[{ color: theme.text }, style]} {...props} />;
};

export default ThemedText;
