import React from "react";
import { Image } from "react-native";
import styles from "./styles";

import { Href, useRouter } from "expo-router";

import { useThemeColors } from "@/src/hooks/useThemeColors";
import Button from "../Button";
import ThemedCustomIcon from "../ThemedCustomIcon";
import ThemedIcon from "../ThemedIcon";
import ThemedView from "../ThemedView";
import SideBarButton from "./SideBarButton";

type NavItem = {
  label: string;
  path?: Href;
  icon: React.ReactElement;
};
type NavItems = NavItem[];

const navItems: NavItems = [
  {
    label: "Strona główna",
    path: "/",
    icon: <ThemedIcon name="home" size={24} />,
  },
  { label: "Szukaj", icon: <ThemedIcon name="search" size={24} /> },
  {
    label: "Eksploruj",
    path: "/explore",
    icon: <ThemedIcon name="explore" size={24} />,
  },
  { label: "Rolki", icon: <ThemedIcon name="movie" size={24} /> },
  {
    label: "Wiadomości",
    icon: <ThemedCustomIcon name="direction" size={24} />,
  },
  {
    label: "Powiadomienia",
    icon: <ThemedCustomIcon name="heart" size={24} />,
  },
  { label: "Utwórz", icon: <ThemedIcon name="add-box" size={24} /> },
  {
    label: "Profil",
    icon: (
      <Image
        style={{
          width: 24,
          height: 24,
          borderRadius: 12,
        }}
        source={require("@/src/assets/images/user_image.jpg")}
      />
    ),
  },
];

export default function SideBar() {
  const router = useRouter();
  const themeColors = useThemeColors();

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={{ flex: 1 }}>
        <ThemedView style={styles.mainLogoContainer}>
          <Button
            onPress={() => router.navigate("/")}
            renderContent={({ isPressed }) => (
              <ThemedCustomIcon
                name="instagram-written"
                width={100}
                height={32}
                color={
                  isPressed
                    ? themeColors.text.hovered
                    : themeColors.text.default
                }
              />
            )}
          />
        </ThemedView>

        <ThemedView style={{ flex: 1 }}>
          {navItems.map((navItem) => {
            const onPress = navItem.path
              ? () => router.navigate(navItem.path!)
              : undefined;

            return (
              <SideBarButton
                key={navItem.label}
                text={navItem.label}
                onPress={onPress}
              >
                {navItem.icon}
              </SideBarButton>
            );
          })}
        </ThemedView>

        <SideBarButton text="Więcej">
          <ThemedCustomIcon name="more" size={24} />
        </SideBarButton>
      </ThemedView>
    </ThemedView>
  );
}
