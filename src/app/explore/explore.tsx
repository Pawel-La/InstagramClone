import SideBar from "@/src/components/SideBar/SideBar";
import ThemedView from "@/src/components/ThemedView";
import styles from "./styles";

export default function Explore() {
  return (
    <ThemedView style={styles.container}>
      <SideBar />
      <ThemedView style={styles.scrollScreen}></ThemedView>
    </ThemedView>
  );
}
