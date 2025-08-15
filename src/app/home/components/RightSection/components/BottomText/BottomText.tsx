import ThemedText from '@/src/components/ThemedText';
import { useThemeContext } from '@/src/context/ThemeContext';
import { FONT_SIZE } from '@/src/utils/theme';

export function BottomText() {
  const { theme: theme } = useThemeContext();
  const style = { color: theme.secondary, fontSize: FONT_SIZE.xs };

  return <ThemedText style={style}>© 2025 INSTAGRAM CLONE</ThemedText>;
}
