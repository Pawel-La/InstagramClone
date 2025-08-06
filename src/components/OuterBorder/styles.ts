import { StyleSheet } from 'react-native';

export default function getStyles(
  contentWidth: number,
  contentHeight: number,
  borderWidth: number
) {
  return StyleSheet.create({
    container: {
      width: contentWidth,
      height: contentHeight,
      position: 'relative',
      backgroundColor: 'transparent',
    },
    border: {
      position: 'absolute',
      left: -borderWidth,
      top: -borderWidth,
      width: contentWidth + 2 * borderWidth,
      height: contentHeight + 2 * borderWidth,
      backgroundColor: 'transparent',
      borderWidth: borderWidth,
    },
  });
}
