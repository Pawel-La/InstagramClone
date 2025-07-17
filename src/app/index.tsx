import { StyleSheet } from "react-native";

import ThemedView from "@/src/components/ThemedView";

import FeedSection from "@/src/components/FeedSection/FeedSection";
import RightSection from "@/src/components/RightSection/RightSection";
import SideBar from "@/src/components/SideBar/SideBar";

export default function Index() {
  return (
    <ThemedView style={styles.container}>
      <SideBar />
      <ThemedView style={styles.scrollScreen}>
        <FeedSection />
        <RightSection />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  scrollScreen: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 22,
    gap: 64,
    justifyContent: "center",
  },
});
