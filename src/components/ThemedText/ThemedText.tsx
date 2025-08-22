import { Text, TextProps } from 'react-native';

import { useThemeContext } from '@/src/context/ThemeContext';

const ThemedText = ({ style, ...props }: TextProps) => {
  const { theme: theme } = useThemeContext();
  const themedTextStyle = [{ color: theme.text }, style];

  return <Text style={themedTextStyle} {...props} />;
};

export default ThemedText;
