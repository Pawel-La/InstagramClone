import { useThemeContext } from '@/src/context/ThemeContext';
import { View, ViewProps } from 'react-native';

const ThemedView = ({ style, ...props }: ViewProps) => {
  const { theme: theme } = useThemeContext();

  return (
    <View
      style={[
        { backgroundColor: theme.background, borderColor: theme.border },
        style,
      ]}
      {...props}
    />
  );
};

export default ThemedView;
