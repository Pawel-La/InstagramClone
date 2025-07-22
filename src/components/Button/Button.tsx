import React, { useState } from "react";
import { Pressable, PressableProps } from "react-native";

type ButtonProps = {
  onPress?: PressableProps["onPress"];
  renderContent: (isPressed: boolean, isHovered: boolean) => React.ReactElement;
};

export default function Button({ onPress, renderContent }: ButtonProps) {
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      onHoverIn={() => setIsHovered(true)}
      onHoverOut={() => setIsHovered(false)}
    >
      {renderContent(isPressed, isHovered)}
    </Pressable>
  );
}
