import { StyleSheet } from "react-native";
import React from "react";

import ThemedView from "../../ThemedView";
import ThemedText from "../../ThemedText";

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
