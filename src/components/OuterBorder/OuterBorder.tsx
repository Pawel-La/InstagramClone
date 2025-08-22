import { PropsWithChildren } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import ThemedView from '../ThemedView';

import getStyles from './styles';

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
  const styles = getStyles(contentWidth, contentHeight, borderWidth);

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={[styles.border, borderStyle]} />
      {children}
    </ThemedView>
  );
}
