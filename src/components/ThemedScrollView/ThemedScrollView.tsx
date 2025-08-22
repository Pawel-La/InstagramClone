import { ScrollView, ScrollViewProps } from 'react-native';

import { useThemeContext } from '@/src/context/ThemeContext';

const ThemedScrollView = ({ style, ...props }: ScrollViewProps) => {
  const { theme: theme } = useThemeContext();
  const themedScrollViewStyle = [{ backgroundColor: theme.background }, style];

  return <ScrollView style={themedScrollViewStyle} {...props} />;
};

export default ThemedScrollView;
