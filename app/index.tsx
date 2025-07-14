import ThemedView from "../components/ThemedView";
import { Text, StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <ThemedView>
      <Text style={{ color: "blue", fontSize: 40 }}>
        Edit app/index.tsx to edit this screen.
      </Text>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: {},
});
