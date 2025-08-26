import { PropsWithChildren, useMemo } from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';

import ThemedView from '../ThemedView';

import styles from './styles';

interface OuterBorderProps extends PropsWithChildren {
  contentWidth: number;
  contentHeight: number;
  borderWidth: number;
  borderStyle?: StyleProp<ViewStyle>;
}

/**
 * border that does not change the total size of content, due to position absolute usage
 */
export default function OuterBorder({
  contentWidth,
  contentHeight,
  borderWidth,
  borderStyle,
  children,
}: OuterBorderProps) {
  const dynamicStyles = useMemo(() => {
    return getDynamicStyles(contentWidth, contentHeight, borderWidth);
  }, [contentWidth, contentHeight, borderWidth]);

  return (
    <ThemedView style={[styles.container, dynamicStyles.container]}>
      <ThemedView style={[styles.border, dynamicStyles.border, borderStyle]} />
      {children}
    </ThemedView>
  );
}

function getDynamicStyles(contentWidth: number, contentHeight: number, borderWidth: number) {
  return StyleSheet.create({
    container: {
      width: contentWidth,
      height: contentHeight,
    },
    border: {
      left: -borderWidth,
      top: -borderWidth,
      width: contentWidth + 2 * borderWidth,
      height: contentHeight + 2 * borderWidth,
      borderWidth: borderWidth,
    },
  });
}
