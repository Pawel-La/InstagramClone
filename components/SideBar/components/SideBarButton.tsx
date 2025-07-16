import { useState, PropsWithChildren } from "react";
import {
  Pressable,
  View,
  StyleProp,
  TextStyle,
  StyleSheet,
} from "react-native";

import ThemedText from "../../ThemedText";
import { useThemeColors } from "@/hooks/useThemeColors";

type SideBarButtonProps = PropsWithChildren & {
  text: string;
  textStyle?: StyleProp<TextStyle>;
};

export default function SideBarButton({
  text,
  textStyle,
  children,
}: SideBarButtonProps) {
  const themeColors = useThemeColors();
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Pressable
      onPressIn={() => {
        setIsPressed(true);
      }}
      onPressOut={() => {
        setIsPressed(false);
      }}
    >
      {({ hovered }) => (
        <View
          style={[
            styles.container,
            {
              backgroundColor: hovered
                ? themeColors.button_background_hovered
                : themeColors.button_background,
            },
            {
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
    </Pressable>
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
