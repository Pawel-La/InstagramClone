import { StyleSheet } from "react-native";
import React from "react";

import ThemedView from "../../ThemedView";
import ThemedText from "../../ThemedText";

export default function TopBar() {
  return (
    <ThemedView style={styles.topBar}>
      <ThemedView>
        <ThemedText style={styles.topBarText}>Dla Ciebie</ThemedText>
      </ThemedView>
      <ThemedView>
        <ThemedText style={styles.topBarText}>Obserwowani</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    gap: 12,
    paddingVertical: 10,
    borderBottomColor: "red",
    borderBottomWidth: 0.8,
  },
  topBarText: {
    fontSize: 16,
    lineHeight: 20,
  },
});
