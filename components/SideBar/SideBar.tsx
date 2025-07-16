import { StyleSheet, Image } from "react-native";

import { useRouter } from "expo-router";

import ThemedView from "../ThemedView";
import ThemedIcon from "../ThemedIcon";
import ThemedCustomIcon from "../ThemedCustomIcon";
import SideBarButton from "./components/SideBarButton";
import MainLogoButton from "./components/MainLogoButton";

export default function SideBar() {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={{ flex: 1 }}>
        <MainLogoButton
          onPress={() => {
            router.navigate("/");
          }}
        />

        <ThemedView style={{ flex: 1 }}>
          <SideBarButton
            text="Strona główna"
            textStyle={{ fontWeight: 700 }}
            onPress={() => {
              router.navigate("/");
            }}
          >
            <ThemedIcon name="home" size={24} />
          </SideBarButton>

          <SideBarButton text="Szukaj">
            <ThemedIcon name="search" size={24} />
          </SideBarButton>

          <SideBarButton
            text="Eksploruj"
            onPress={() => {
              router.navigate("/explore");
            }}
          >
            <ThemedIcon name="explore" size={24} />
          </SideBarButton>

          <SideBarButton text="Rolki">
            <ThemedIcon name="movie" size={24} />
          </SideBarButton>

          <SideBarButton text="Wiadomości">
            <ThemedCustomIcon name="direction" size={24} />
          </SideBarButton>

          <SideBarButton text="Powiadomienia">
            <ThemedCustomIcon name="heart" size={24} />
          </SideBarButton>

          <SideBarButton text="Utwórz">
            <ThemedIcon name="add-box" size={24} />
          </SideBarButton>

          <SideBarButton text="Profil">
            <Image
              style={{
                width: 24,
                height: 24,
                borderRadius: 12,
              }}
              source={require("@/assets/images/user_image.jpg")}
            />
          </SideBarButton>
        </ThemedView>

        <SideBarButton text="Więcej">
          <ThemedCustomIcon name="more" size={24} />
        </SideBarButton>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 244,
    borderRightColor: "gray",
    borderRightWidth: 1,
    paddingBottom: 20,
    paddingTop: 8,
    paddingHorizontal: 12,
  },
});
