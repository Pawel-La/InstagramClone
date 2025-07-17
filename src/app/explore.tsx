import SideBar from "@/src/components/SideBar/SideBar";
import { StyleSheet } from "react-native";
import ThemedView from "../components/ThemedView";

export default function Explore() {
  return (
    <ThemedView style={styles.container}>
      <SideBar />
      <ThemedView style={styles.scrollScreen}></ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  scrollScreen: {
    flex: 1,
    backgroundColor: "red",
  },
});
