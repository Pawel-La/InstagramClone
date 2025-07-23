import { SvgProps } from "react-native-svg";

import DirectionIcon from "@/src/assets/images/direction.svg";
import HeartIcon from "@/src/assets/images/heart.svg";
import InstagramWrittenIcon from "@/src/assets/images/instagram-written-logo.svg";
import MoreIcon from "@/src/assets/images/more.svg";
import { useThemeColors } from "@/src/hooks/useThemeColors";

type CustomIconNameProps = "direction" | "heart" | "more" | "instagram-written";

type ThemedCustomIconProps = SvgProps & {
  name: CustomIconNameProps;
  size?: number;
  fill?: string;
  color?: string;
};

export default function ThemedCustomIcon({
  name,
  size,
  fill,
  color,
  ...props
}: ThemedCustomIconProps) {
  const themeColors = useThemeColors();
  const width = size ?? props["width"];
  const height = size ?? props["width"];
  const iconFill = fill ?? themeColors.icon_fill;
  const iconColor = color ?? themeColors.text.default;

  switch (name) {
    case "direction": {
      return (
        <DirectionIcon
          fill={iconFill}
          color={iconColor}
          width={width}
          height={height}
          {...props}
        />
      );
    }
    case "heart": {
      return (
        <HeartIcon fill={iconColor} width={width} height={height} {...props} />
      );
    }
    case "more": {
      return (
        <MoreIcon color={iconColor} width={width} height={height} {...props} />
      );
    }
    case "instagram-written": {
      return <InstagramWrittenIcon color={iconColor} {...props} />;
    }
  }
}
