import { StyleSheet } from 'react-native';

import { FONT_SIZE, FONT_WEIGHT, SPACING } from '@/src/utils/theme';

const styles = StyleSheet.create({
  list: { flexDirection: 'column' },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingVertical: SPACING.xxs,
  },
  textRowTitle: {
    fontWeight: FONT_WEIGHT.medium,
  },
  textRowLink: {
    fontSize: FONT_SIZE.small,
    fontWeight: FONT_WEIGHT.medium,
  },
  userRow: { fontSize: FONT_SIZE.small },
});

export default styles;
