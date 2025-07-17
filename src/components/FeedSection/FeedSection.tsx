import { StyleSheet } from "react-native";

import ThemedView from "../ThemedView";

import Feed from "./components/Feed";
import StoriesBar from "./components/StoriesBar";
import TopBar from "./components/TopBar";

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
