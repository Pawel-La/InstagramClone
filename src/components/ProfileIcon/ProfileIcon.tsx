import { Image, ImageSourcePropType, ImageStyle } from 'react-native';

import { BORDER_RADIUS } from '@/src/utils/theme';

type ProfileIconProps = {
  size: number;
  source: ImageSourcePropType;
  style?: ImageStyle;
};

export default function ProfileIcon({ size, source, style }: ProfileIconProps) {
  const imageStyle = [
    {
      width: size,
      height: size,
      borderRadius: BORDER_RADIUS.round,
    },
    style,
  ];

  return <Image style={imageStyle} source={source} />;
}
