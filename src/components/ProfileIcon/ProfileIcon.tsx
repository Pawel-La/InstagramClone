import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleSheet,
} from 'react-native';

import { BORDER_RADIUS } from '@/src/utils/theme';

type ProfileIconProps = {
  size: number;
  source: ImageSourcePropType;
  style?: ImageStyle;
};

export default function ProfileIcon({ size, source, style }: ProfileIconProps) {
  const styles = createStyles(size);

  return <Image style={[styles.container, style]} source={source} />;
}

function createStyles(size: number) {
  const styles = StyleSheet.create({
    container: {
      width: size,
      height: size,
      borderRadius: BORDER_RADIUS.round,
    },
  });
  return styles;
}
