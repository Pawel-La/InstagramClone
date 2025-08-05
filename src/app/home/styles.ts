import { SPACING } from '@/src/utils/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  scrollScreen: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: SPACING.xxl,
    gap: SPACING.xxxxl,
    justifyContent: 'center',
  },
});

export default styles;
