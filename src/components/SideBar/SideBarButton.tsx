import { PropsWithChildren } from "react";
import {
  PressableProps,
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
} from "react-native";

import { useThemeColors } from "@/src/hooks/useThemeColors";
import Button from "../Button";
import ThemedText from "../ThemedText";

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

  return (
    <Button
      onPress={onPress}
      renderContent={(isPressed, isHovered) => (
        <View
          style={[
            styles.container,
            {
              backgroundColor: isHovered
                ? themeColors.button.background.hovered
                : themeColors.button.background.default,
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

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 12,
    marginVertical: 4,
    gap: 16,
  },
});
