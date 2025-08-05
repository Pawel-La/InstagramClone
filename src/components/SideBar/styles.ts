import { BORDER_SIZE, SPACING } from '@/src/utils/theme';
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
    fontWeight: '700',
  },
});

export default styles;
