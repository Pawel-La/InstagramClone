import { SvgProps } from 'react-native-svg';

import DirectionIcon from '@/src/assets/images/direction.svg';
import HeartIcon from '@/src/assets/images/heart.svg';
import InstagramWrittenIcon from '@/src/assets/images/instagram-written-logo.svg';
import MoreIcon from '@/src/assets/images/more.svg';
import { useThemeContext } from '@/src/context/ThemeContext';

type CustomIconNameProps = 'direction' | 'heart' | 'more' | 'instagram-written';

type ThemedCustomIconProps = SvgProps & {
  name: CustomIconNameProps;
  size?: number;
  primaryColor?: string;
  secondaryColor?: string;
};

export default function ThemedCustomIcon({
  name,
  size,
  primaryColor,
  secondaryColor,
  ...props
}: ThemedCustomIconProps) {
  const { theme: theme } = useThemeContext();
  const width = size ?? props['width'];
  const height = size ?? props['height'];
  const primary = primaryColor ?? theme.primary;
  const secondary = secondaryColor ?? theme.background;

  switch (name) {
    case 'direction': {
      return (
        <DirectionIcon
          color={primary}
          fill={secondary}
          width={width}
          height={height}
          {...props}
        />
      );
    }
    case 'heart': {
      return (
        <HeartIcon fill={primary} width={width} height={height} {...props} />
      );
    }
    case 'more': {
      return (
        <MoreIcon color={primary} width={width} height={height} {...props} />
      );
    }
    case 'instagram-written': {
      return <InstagramWrittenIcon color={primary} {...props} />;
    }
  }
}
