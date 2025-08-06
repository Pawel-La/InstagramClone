import { BORDER_SIZE, FONT_WEIGHT, SPACING } from '@/src/utils/theme';
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
  selectedButtonText: {
    fontWeight: FONT_WEIGHT.bold,
  },
});

export default styles;
