import { StyleSheet } from 'react-native';

import { BORDER_SIZE, FONT_SIZE, FONT_WEIGHT, SPACING } from '@/src/utils/theme';

const styles = StyleSheet.create({
  postContainer: {
    gap: SPACING.xxs,
    width: 470,
    alignSelf: 'center',
    borderBottomWidth: BORDER_SIZE.sm,
    paddingBottom: SPACING.lg,
    marginBottom: SPACING.xl,
  },
  postDetailsContainer: {
    flexDirection: 'row',
    gap: SPACING.xs,
    alignItems: 'center',
  },
  postDetailsSubcontainer: {
    flex: 1,
  },
  postDetailAuthors: {
    fontWeight: FONT_WEIGHT.medium,
  },
  subText: {
    fontSize: FONT_SIZE.small,
  },
  row: {
    flexDirection: 'row',
  },
});

export default styles;
