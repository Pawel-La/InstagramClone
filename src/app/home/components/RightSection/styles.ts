import { FONT_WEIGHT, SPACING } from '@/src/utils/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 319,
    paddingTop: SPACING.xxl,
    paddingHorizontal: SPACING.lg,
    flexDirection: 'column',
    gap: SPACING.md,
  },
  userRowContainer: {
    paddingVertical: SPACING.xs,
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs,
  },
  textsContainer: { flexDirection: 'column', flex: 1 },
  mainText: { fontWeight: FONT_WEIGHT.medium },
  proposedUsersList: { flexDirection: 'column' },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingVertical: SPACING.xxs,
  },
});

export default styles;
