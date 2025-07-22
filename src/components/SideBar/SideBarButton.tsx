import { PropsWithChildren } from "react";
import { PressableProps, StyleProp, TextStyle, View } from "react-native";

import { useThemeColors } from "@/src/hooks/useThemeColors";
import Button from "../Button";
import ThemedText from "../ThemedText";
import styles from "./styles";

type SideBarButtonProps = PropsWithChildren & {
  text: string;
  textStyle?: StyleProp<TextStyle>;
  onPress?: PressableProps["onPress"];
};

export default function SideBarButton({
  text,
  textStyle,
  onPress,
  children,
}: SideBarButtonProps) {
  const themeColors = useThemeColors();
  const buttonBackground = themeColors.button.background;

  return (
    <Button
      onPress={onPress}
      renderContent={({ isPressed, isHovered }) => (
        <View
          style={[
            styles.button,
            {
              backgroundColor: isHovered
                ? buttonBackground.hovered
                : buttonBackground.default,
              transform: [{ scale: isPressed ? 0.96 : 1 }],
            },
          ]}
        >
          {children}
          <ThemedText style={[{ fontSize: 16, lineHeight: 24 }, textStyle]}>
            {text}
          </ThemedText>
        </View>
      )}
    />
  );
}
