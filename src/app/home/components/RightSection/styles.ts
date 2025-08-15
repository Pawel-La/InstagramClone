import { SPACING } from '@/src/utils/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 319,
    paddingTop: SPACING.xxl,
    paddingHorizontal: SPACING.lg,
    flexDirection: 'column',
    gap: SPACING.md,
    marginHorizontal: SPACING.sm,
  },
});

export default styles;
