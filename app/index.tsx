import ThemedView from "../components/ThemedView";
import { StyleSheet } from "react-native";
import SideBar from "@/components/SideBar/SideBar";

export default function Index() {
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
  },
});
