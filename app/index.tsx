import { StyleSheet } from "react-native";

import ThemedView from "@/components/ThemedView";

import SideBar from "@/components/SideBar/SideBar";
import FeedSection from "@/components/FeedSection/FeedSection";
import RightSection from "@/components/RightSection/RightSection";

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
