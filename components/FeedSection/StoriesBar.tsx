import { StyleSheet } from "react-native";
import React from "react";

import ThemedView from "../ThemedView";
import ThemedText from "../ThemedText";

export default function StoriesBar() {
  return (
    <ThemedView style={styles.storiesBar}>
      <ThemedText>1111</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  storiesBar: {
    padding: 8,
    backgroundColor: "yellow",
  },
});
