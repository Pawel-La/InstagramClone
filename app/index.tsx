import ThemedView from "../components/ThemedView";
import { StyleSheet } from "react-native";
import InstagramWrittenLogo from "../assets/images/instagram-written-logo.svg";

export default function Index() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.sidebar}>
        <ThemedView style={styles.innerContainer}>
          <ThemedView style={styles.mainLogo}>
            <InstagramWrittenLogo width={100} height={30} fill="red" />
          </ThemedView>
        </ThemedView>
      </ThemedView>

      <ThemedView style={styles.scrollScreen}></ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  sidebar: {
    width: 244,
    borderRightColor: "gray",
    borderRightWidth: 1,
    paddingBottom: 20,
    paddingTop: 8,
    paddingHorizontal: 12,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: "red",
    color: "blue",
  },
  mainLogo: {
    paddingTop: 25,
    paddingBottom: 16,
    paddingHorizontal: 12,
    marginBottom: 19,
    // backgroundColor: "gray",
  },
  scrollScreen: {
    flex: 1,
  },
});
