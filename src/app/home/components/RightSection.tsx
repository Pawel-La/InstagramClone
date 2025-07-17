import { StyleSheet } from "react-native";

import ThemedText from "@/src/components/ThemedText";
import ThemedView from "@/src/components/ThemedView";

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
