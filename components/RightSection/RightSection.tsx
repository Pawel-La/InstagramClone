import { StyleSheet } from "react-native";
import React from "react";

import ThemedText from "../ThemedText";
import ThemedView from "../ThemedView";

export default function RightSection() {
  return (
    <ThemedView style={styles.rightSection}>
      <ThemedText>2222</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  rightSection: {
    width: 319,
    backgroundColor: "red",
  },
});
