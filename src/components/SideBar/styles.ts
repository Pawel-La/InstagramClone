import {
  BORDER_RADIUS,
  BORDER_SIZE,
  FONT_SIZE,
  LINE_HEIGHT,
  SPACING,
} from '@/src/utils/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 244,
    borderRightWidth: BORDER_SIZE.sm,
    paddingBottom: SPACING.xl,
    paddingTop: SPACING.xs,
    paddingHorizontal: SPACING.md,
  },
  mainLogoContainer: {
    paddingTop: SPACING.xxxl,
    paddingBottom: SPACING.sm,
    paddingHorizontal: SPACING.md,
    marginBottom: SPACING.xl,
  },
  sideBarButton: {
    flexDirection: 'row',
    padding: SPACING.md,
    marginVertical: SPACING.xxs,
    gap: SPACING.lg,
    borderRadius: BORDER_RADIUS.md,
  },
  sideBarButtonText: {
    fontSize: FONT_SIZE.md,
    lineHeight: LINE_HEIGHT.lg,
  },
});

export default styles;
