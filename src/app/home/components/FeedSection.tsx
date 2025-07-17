import { StyleSheet } from "react-native";

import ThemedView from "@/src/components/ThemedView";

import Feed from "./Feed";
import StoriesBar from "./StoriesBar";
import TopBar from "./TopBar";

export default function FeedSection() {
  return (
    <ThemedView style={styles.mainSection}>
      <TopBar />
      <StoriesBar />
      <Feed />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  mainSection: {
    width: 630,
    gap: 16,
    backgroundColor: "blue",
  },
});
