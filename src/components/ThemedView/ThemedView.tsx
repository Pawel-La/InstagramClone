import { useThemeContext } from '@/src/context/ThemeContext';
import { View, ViewProps } from 'react-native';

const ThemedView = ({ style, ...props }: ViewProps) => {
  const { theme: theme } = useThemeContext();
  const themedViewStyle = [
    { backgroundColor: theme.background, borderColor: theme.border },
    style,
  ];

  return <View style={themedViewStyle} {...props} />;
};

export default ThemedView;
