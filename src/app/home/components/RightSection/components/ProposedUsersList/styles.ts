import { StyleSheet } from 'react-native';

import { SPACING } from '@/src/utils/theme';

const styles = StyleSheet.create({
  proposedUsersList: { flexDirection: 'column' },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingVertical: SPACING.xxs,
  },
});

export default styles;
