import { FlatList, FlatListProps } from 'react-native';

import { useThemeContext } from '@/src/context/ThemeContext';

function ThemedFlatList<T>({ style, ...props }: FlatListProps<T>) {
  const { theme: theme } = useThemeContext();
  const themedFlatListStyle = [{ backgroundColor: theme.background }, style];

  return <FlatList style={themedFlatListStyle} {...props} />;
}

export default ThemedFlatList;
