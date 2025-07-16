import { PropsWithChildren, useState } from "react";
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  Image,
  Pressable,
  View,
} from "react-native";

import ThemedText from "./ThemedText";
import ThemedView from "./ThemedView";
import ThemedIcon from "./ThemedIcon";
import ThemedCustomIcon from "./ThemedCustomIcon";
import { useThemeColors } from "@/hooks/useThemeColors";

export default function SideBar() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={{ flex: 1 }}>
        <ThemedView style={styles.mainLogo}>
          <ThemedCustomIcon name="instagram-written" width={100} height={32} />
        </ThemedView>

        <ThemedView style={{ flex: 1 }}>
          <SideBarElement text="Strona główna" textStyle={{ fontWeight: 700 }}>
            <ThemedIcon name="home" size={24} />
          </SideBarElement>

          <SideBarElement text="Szukaj">
            <ThemedIcon name="search" size={24} />
          </SideBarElement>

          <SideBarElement text="Eksploruj">
            <ThemedIcon name="explore" size={24} />
          </SideBarElement>

          <SideBarElement text="Rolki">
            <ThemedIcon name="movie" size={24} />
          </SideBarElement>

          <SideBarElement text="Wiadomości">
            <ThemedCustomIcon name="direction" size={24} />
          </SideBarElement>

          <SideBarElement text="Powiadomienia">
            <ThemedCustomIcon name="heart" size={24} />
          </SideBarElement>

          <SideBarElement text="Utwórz">
            <ThemedIcon name="add-box" size={24} />
          </SideBarElement>

          <SideBarElement text="Profil">
            <Image
              style={{
                width: 24,
                height: 24,
                borderRadius: 12,
              }}
              source={require("../assets/images/user_image.jpg")}
            />
          </SideBarElement>
        </ThemedView>

        <SideBarElement text="Więcej">
          <ThemedCustomIcon name="more" size={24} />
        </SideBarElement>
      </ThemedView>
    </ThemedView>
  );
}

type SideBarElementProps = PropsWithChildren & {
  text: string;
  textStyle?: StyleProp<TextStyle>;
};

const SideBarElement = ({ text, textStyle, children }: SideBarElementProps) => {
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
            styles.elementContainer,
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
};

const styles = StyleSheet.create({
  container: {
    width: 244,
    borderRightColor: "gray",
    borderRightWidth: 1,
    paddingBottom: 20,
    paddingTop: 8,
    paddingHorizontal: 12,
  },
  elementContainer: {
    flexDirection: "row",
    padding: 12,
    marginVertical: 4,
    gap: 16,
  },
  mainLogo: {
    paddingTop: 30,
    paddingBottom: 11,
    paddingHorizontal: 12,
    marginBottom: 19,
  },
});
