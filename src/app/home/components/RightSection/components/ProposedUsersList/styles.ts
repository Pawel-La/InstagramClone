import { StyleSheet } from 'react-native';

import { FONT_SIZE, SPACING } from '@/src/utils/theme';

const styles = StyleSheet.create({
  list: { flexDirection: 'column' },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingVertical: SPACING.xxs,
  },
  userRow: { fontSize: FONT_SIZE.small },
});

export default styles;
