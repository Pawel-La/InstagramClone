import { useThemeContext } from '@/src/context/ThemeContext';
import { ScrollView, ScrollViewProps } from 'react-native';

const ThemedScrollView = ({ style, ...props }: ScrollViewProps) => {
  const { theme: theme } = useThemeContext();
  const themedScrollViewStyle = [{ backgroundColor: theme.background }, style];

  return <ScrollView style={themedScrollViewStyle} {...props} />;
};

export default ThemedScrollView;
