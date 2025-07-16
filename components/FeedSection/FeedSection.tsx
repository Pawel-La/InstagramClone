import { StyleSheet } from "react-native";
import React from "react";

import ThemedView from "../ThemedView";

import TopBar from "./TopBar";
import StoriesBar from "./StoriesBar";
import Feed from "./Feed";

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
