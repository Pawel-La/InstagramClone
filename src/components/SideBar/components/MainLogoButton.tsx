import React, { useState } from "react";
import { Pressable, PressableProps, StyleSheet } from "react-native";

import ThemedCustomIcon from "@/src/components/ThemedCustomIcon";
import ThemedView from "@/src/components/ThemedView";
import { useThemeColors } from "@/src/hooks/useThemeColors";

type MainLogoButtonProps = {
  onPress?: PressableProps["onPress"];
};

export default function MainLogoButton({ onPress }: MainLogoButtonProps) {
  const themeColors = useThemeColors();
  const [isPressed, setIsPressed] = useState(false);

  return (
    <ThemedView style={styles.container}>
      <Pressable
        onPress={onPress}
        onPressIn={() => {
          setIsPressed(true);
        }}
        onPressOut={() => {
          setIsPressed(false);
        }}
      >
        <ThemedCustomIcon
          name="instagram-written"
          width={100}
          height={32}
          color={isPressed ? themeColors.text_hovered : themeColors.text}
        />
      </Pressable>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 11,
    paddingHorizontal: 12,
    marginBottom: 19,
  },
});
