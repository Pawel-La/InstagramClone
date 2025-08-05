import {
  BORDER_SIZE,
  FONT_SIZE,
  FONT_WEIGHT,
  LINE_HEIGHT,
  SPACING,
} from '@/src/utils/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainSection: {
    width: 630,
    gap: SPACING.lg,
  },
  topBar: {
    flexDirection: 'row',
    gap: SPACING.md,
    paddingVertical: SPACING.sm,
    borderBottomWidth: BORDER_SIZE.sm,
  },
  topBarText: {
    fontSize: FONT_SIZE.md,
    lineHeight: LINE_HEIGHT.md,
    fontWeight: FONT_WEIGHT.bold,
  },
  storiesBar: {
    padding: SPACING.xs,
    backgroundColor: 'yellow',
  },
  feedSection: {
    width: 470,
    backgroundColor: 'purple',
    alignSelf: 'center',
  },
});

export default styles;
