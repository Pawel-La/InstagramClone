import InstagramWrittenLogo from "../assets/images/instagram-written-logo.svg";
import DirectionLogo from "../assets/images/direction.svg";
import { useThemeColors } from "@/hooks/useThemeColors";
import { SvgProps } from "react-native-svg";

type CustomIconNameProps = "direction" | "instagram-written";

type ThemedCustomIconProps = SvgProps & {
  name: CustomIconNameProps;
  fill?: string;
  color?: string;
};

export default function ThemedCustomIcon({
  name,
  fill,
  color,
  ...props
}: ThemedCustomIconProps) {
  const themeColors = useThemeColors();
  const iconFill = fill ?? themeColors.iconFill;
  const iconColor = color ?? themeColors.text;

  switch (name) {
    case "direction": {
      return <DirectionLogo fill={iconFill} color={iconColor} {...props} />;
    }
    case "instagram-written": {
      return <InstagramWrittenLogo {...props} color={iconColor} />;
    }
  }
}
