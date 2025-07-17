import React from "react";
import { StyleSheet } from "react-native";

import ThemedText from "@/src/components/ThemedText";
import ThemedView from "@/src/components/ThemedView";

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
