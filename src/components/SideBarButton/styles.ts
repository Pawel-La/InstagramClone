import {
  BORDER_RADIUS,
  FONT_SIZE,
  LINE_HEIGHT,
  SPACING,
} from '@/src/utils/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: SPACING.md,
    marginVertical: SPACING.xxs,
    gap: SPACING.lg,
    borderRadius: BORDER_RADIUS.md,
  },
  text: {
    fontSize: FONT_SIZE.md,
    lineHeight: LINE_HEIGHT.lg,
  },
});

export default styles;
