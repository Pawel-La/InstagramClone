import { SvgProps } from 'react-native-svg';

import AddBoxIcon from '@/src/assets/images/add-box.svg';
import DirectionIcon from '@/src/assets/images/direction.svg';
import ExploreV1Icon from '@/src/assets/images/explore_v1.svg';
import ExploreV2Icon from '@/src/assets/images/explore_v2.svg';
import HeartEmptyIcon from '@/src/assets/images/heart_empty.svg';
import HeartFilledIcon from '@/src/assets/images/heart_filled.svg';
import HomeIcon from '@/src/assets/images/home.svg';
import InstagramWrittenIcon from '@/src/assets/images/instagram-written-logo.svg';
import ReelsV1Icon from '@/src/assets/images/reels_v1.svg';
import ReelsV2Icon from '@/src/assets/images/reels_v2.svg';
import SearchIcon from '@/src/assets/images/search.svg';
import ThreeHorizontalLinesIcon from '@/src/assets/images/three-horizontal-lines.svg';
import { useThemeContext } from '@/src/context/ThemeContext';

type CustomIconNameProps =
  | 'home'
  | 'home_filled'
  | 'search'
  | 'explore_v1'
  | 'explore_v2'
  | 'reels_v1'
  | 'reels_v2'
  | 'direction'
  | 'direction_filled'
  | 'heart_empty'
  | 'heart_filled'
  | 'add-box'
  | 'three-horizontal-lines'
  | 'instagram-written';

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
    case 'home': {
      return (
        <HomeIcon
          color={primary}
          fill={secondary}
          width={width}
          height={height}
          {...props}
        />
      );
    }
    case 'home_filled': {
      return (
        <HomeIcon
          color={primary}
          fill={primary}
          width={width}
          height={height}
          {...props}
        />
      );
    }
    case 'search': {
      return (
        <SearchIcon
          color={primary}
          fill={secondary}
          width={width}
          height={height}
          {...props}
        />
      );
    }
    case 'explore_v1': {
      return (
        <ExploreV1Icon
          color={primary}
          fill={primary}
          width={width}
          height={height}
          {...props}
        />
      );
    }
    case 'explore_v2': {
      return (
        <ExploreV2Icon
          color={primary}
          fill={primary}
          width={width}
          height={height}
          {...props}
        />
      );
    }
    case 'reels_v1': {
      return (
        <ReelsV1Icon
          color={primary}
          fill={primary}
          width={width}
          height={height}
          {...props}
        />
      );
    }
    case 'reels_v2': {
      return (
        <ReelsV2Icon
          color={primary}
          fill={primary}
          width={width}
          height={height}
          {...props}
        />
      );
    }
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
    case 'direction_filled': {
      return (
        <DirectionIcon
          color={primary}
          fill={primary}
          width={width}
          height={height}
          {...props}
        />
      );
    }
    case 'heart_empty': {
      return (
        <HeartEmptyIcon
          fill={primary}
          width={width}
          height={height}
          {...props}
        />
      );
    }
    case 'heart_filled': {
      return (
        <HeartFilledIcon
          fill={primary}
          width={width}
          height={height}
          {...props}
        />
      );
    }
    case 'add-box': {
      return (
        <AddBoxIcon color={primary} width={width} height={height} {...props} />
      );
    }
    case 'three-horizontal-lines': {
      return (
        <ThreeHorizontalLinesIcon
          color={primary}
          width={width}
          height={height}
          {...props}
        />
      );
    }
    case 'instagram-written': {
      return <InstagramWrittenIcon color={primary} {...props} />;
    }
  }
}
