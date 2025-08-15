import {
  BORDER_SIZE,
  FONT_SIZE,
  FONT_WEIGHT,
  LINE_HEIGHT,
  SPACING,
} from '@/src/utils/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    gap: SPACING.md,
    paddingVertical: SPACING.sm,
    borderBottomWidth: BORDER_SIZE.sm,
  },
  topBarText: {
    fontSize: FONT_SIZE.base,
    lineHeight: LINE_HEIGHT.md,
    fontWeight: FONT_WEIGHT.bold,
  },
});

export default styles;
