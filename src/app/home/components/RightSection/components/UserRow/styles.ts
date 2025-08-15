import { StyleSheet } from 'react-native';

import { FONT_WEIGHT, SPACING } from '@/src/utils/theme';

const styles = StyleSheet.create({
  userRowContainer: {
    paddingVertical: SPACING.xs,
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs,
  },
  textsContainer: { flexDirection: 'column', flex: 1 },
  mainText: { fontWeight: FONT_WEIGHT.medium },
});

export default styles;
