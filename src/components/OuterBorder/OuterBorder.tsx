import { PropsWithChildren } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import ThemedView from '../ThemedView';

type OuterBorderProps = PropsWithChildren & {
  contentWidth: number;
  contentHeight: number;
  borderWidth: number;
  borderStyle?: StyleProp<ViewStyle>;
};

export default function OuterBorder({
  contentWidth,
  contentHeight,
  borderWidth,
  borderStyle,
  children,
}: OuterBorderProps) {
  return (
    <ThemedView
      style={{
        width: contentWidth,
        height: contentHeight,
        position: 'relative',
        backgroundColor: 'transparent',
      }}
    >
      <ThemedView
        style={[
          {
            position: 'absolute',
            left: -borderWidth,
            top: -borderWidth,
            width: contentWidth + 2 * borderWidth,
            height: contentHeight + 2 * borderWidth,
            backgroundColor: 'transparent',
            borderWidth: borderWidth,
          },
          borderStyle,
        ]}
      />

      {children}
    </ThemedView>
  );
}
