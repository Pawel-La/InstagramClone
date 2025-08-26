import { StyleSheet } from 'react-native';

import { BORDER_SIZE, SPACING } from '@/src/utils/theme';

const styles = StyleSheet.create({
  container: {
    borderRightWidth: BORDER_SIZE.sm,
    paddingBottom: SPACING.xl,
    paddingTop: SPACING.xs,
    paddingHorizontal: SPACING.md,
  },
  subcontainer: {
    flex: 1,
  },
});

export default styles;
