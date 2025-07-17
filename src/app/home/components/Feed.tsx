import React from "react";
import { StyleSheet } from "react-native";

import ThemedText from "@/src/components/ThemedText";
import ThemedView from "@/src/components/ThemedView";

export default function Feed() {
  return (
    <ThemedView style={styles.feedSection}>
      <ThemedText>1111</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  feedSection: {
    width: 470,
    backgroundColor: "purple",
    alignSelf: "center",
  },
});
