import { ComponentProps } from "react";
import { StyleProp, StyleSheet, TextStyle } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import ThemedText from "./ThemedText";
import ThemedView from "./ThemedView";
import ThemedIcon from "./ThemedIcon";
import ThemedCustomIcon from "./ThemedCustomIcon";

export default function SideBar() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={{ flex: 1 }}>
        <ThemedView style={styles.mainLogo}>
          <ThemedCustomIcon name="instagram-written" width={100} height={30} />
        </ThemedView>

        <ThemedView style={{ flex: 1 }}>
          <SideBarElement
            icon="home"
            text="Strona główna"
            textStyle={{ fontWeight: 700 }}
          />
          <SideBarElement icon="search" text="Szukaj" />

          <ThemedCustomIcon name="direction" width={24} height={24} />

          <SideBarElement icon="explore" text="Eksploruj" />
          <SideBarElement icon="movie" text="Rolki" />
          <SideBarElement icon="?" text="Wiadomości" />
          <SideBarElement icon="?" text="Powiadomienia" />
          <SideBarElement icon="add-box" text="Utwórz" />
          <SideBarElement icon="?" text="Profil" />
        </ThemedView>

        <ThemedView>
          <SideBarElement icon="?" text="Więcej" />
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

type SideBarElementProps = {
  icon: ComponentProps<typeof MaterialIcons>["name"];
  text: string;
  textStyle?: StyleProp<TextStyle>;
};

const SideBarElement = ({ icon, text, textStyle }: SideBarElementProps) => {
  return (
    <ThemedView style={styles.elementContainer}>
      <ThemedIcon name={icon} size={24} />
      <ThemedText style={[{ fontSize: 16, lineHeight: 24 }, textStyle]}>
        {text}
      </ThemedText>
    </ThemedView>
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
    paddingTop: 32,
    paddingBottom: 16,
    paddingHorizontal: 12,
    marginBottom: 19,
  },
});
