import { useThemeContext } from '@/src/context/ThemeContext';
import { ScrollView, ScrollViewProps } from 'react-native';

const ThemedScrollView = ({ style, ...props }: ScrollViewProps) => {
  const { theme: theme } = useThemeContext();

  return (
    <ScrollView
      style={[{ backgroundColor: theme.background }, style]}
      {...props}
    />
  );
};

export default ThemedScrollView;
