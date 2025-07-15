import { StyleSheet } from "react-native";
import ThemedText from "./ThemedText";
import ThemedView from "./ThemedView";
import InstagramWrittenLogo from "../assets/images/instagram-written-logo.svg";

const SideBar = () => {
  return (
    <ThemedView style={styles.sidebar}>
      <ThemedView style={styles.innerContainer}>
        <ThemedView style={styles.mainLogo}>
          <ThemedText>
            <InstagramWrittenLogo width={100} height={30} />
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
};

export default SideBar;

const styles = StyleSheet.create({
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
  },
});
