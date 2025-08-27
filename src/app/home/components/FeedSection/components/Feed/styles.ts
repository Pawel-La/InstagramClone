import { StyleSheet } from 'react-native';

import { FONT_SIZE, FONT_WEIGHT, SPACING } from '@/src/utils/theme';

const styles = StyleSheet.create({
  container: {
    width: 470,
    alignSelf: 'center',
  },
  postContainer: {
    gap: SPACING.xxs,
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
