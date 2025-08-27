import { StyleSheet } from 'react-native';

import { BORDER_RADIUS } from '@/src/utils/theme';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    borderRadius: BORDER_RADIUS.round,
  },
  backIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
    borderRadius: BORDER_RADIUS.round,
  },
  frontIcon: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    borderRadius: BORDER_RADIUS.round,
  },
});

export default styles;
