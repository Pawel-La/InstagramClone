import { PropsWithChildren } from 'react';
import { ImageSourcePropType, ViewStyle } from 'react-native';

import ProfileIcon from '../ProfileIcon';
import ThemedView from '../ThemedView';

import styles from './styles';

export default function OverlappingProfileIcons({
  containerSize,
  size,
  frontIcon,
  backIcon,
}: {
  containerSize: number;
  size: number;
  frontIcon: ImageSourcePropType;
  backIcon: ImageSourcePropType;
}) {
  return (
    <Container containerSize={containerSize}>
      <Icon size={size} source={backIcon} containerStyle={styles.backIcon} />
      <Icon size={size} source={frontIcon} containerStyle={styles.frontIcon} />
    </Container>
  );
}

function Container({ containerSize, children }: { containerSize: number } & PropsWithChildren) {
  return (
    <ThemedView
      style={[
        styles.container,
        {
          width: containerSize,
          height: containerSize,
        },
      ]}
    >
      {children}
    </ThemedView>
  );
}

function Icon({
  size,
  source,
  containerStyle,
}: {
  size: number;
  source: ImageSourcePropType;
  containerStyle: ViewStyle;
}) {
  return (
    <ThemedView
      style={[
        containerStyle,
        {
          width: size,
          height: size,
        },
      ]}
    >
      <ProfileIcon size={size} source={source} />
    </ThemedView>
  );
}
