import { SvgProps } from "react-native-svg";

import { useThemeColors } from "@/hooks/useThemeColors";
import InstagramWrittenLogo from "../assets/images/instagram-written-logo.svg";
import DirectionLogo from "../assets/images/direction.svg";
import HeartLogo from "../assets/images/heart.svg";
import MoreLogo from "../assets/images/more.svg";

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
  const iconColor = color ?? themeColors.text;

  switch (name) {
    case "direction": {
      return (
        <DirectionLogo
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
        <HeartLogo fill={iconColor} width={width} height={height} {...props} />
      );
    }
    case "more": {
      return (
        <MoreLogo color={iconColor} width={width} height={height} {...props} />
      );
    }
    case "instagram-written": {
      return <InstagramWrittenLogo color={iconColor} {...props} />;
    }
  }
}
