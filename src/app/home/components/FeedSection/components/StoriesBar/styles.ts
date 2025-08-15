import { StyleSheet } from 'react-native';

import {
  BORDER_RADIUS,
  BORDER_SIZE,
  FONT_SIZE,
  SPACING,
} from '@/src/utils/theme';

const styles = StyleSheet.create({
  storiesBar: {
    width: 630,
    height: 124,
    flexGrow: 0,
  },
  storiesBarContainer: {
    padding: SPACING.xs,
    gap: SPACING.xl,
  },
  userStoryIcon: {
    padding: SPACING.xxs,
    flexDirection: 'column',
    alignItems: 'center',
    gap: SPACING.xs,
  },
  userStoryIconText: {
    fontSize: FONT_SIZE.small,
  },
  innerBorder: {
    borderWidth: BORDER_SIZE.lg,
    borderRadius: BORDER_RADIUS.round,
    borderColor: 'transparent',
  },
  doubleBorderContainer: { position: 'relative' },
  gradientRing: {
    position: 'absolute',
    left: -5,
    top: -5,
  },
});

export default styles;
