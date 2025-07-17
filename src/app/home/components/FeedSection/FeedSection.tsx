import ThemedText from "@/src/components/ThemedText";
import ThemedView from "@/src/components/ThemedView";
import styles from "./styles";

export default function FeedSection() {
  return (
    <ThemedView style={styles.mainSection}>
      <TopBar />
      <StoriesBar />
      <Feed />
    </ThemedView>
  );
}

function TopBar() {
  return (
    <ThemedView style={styles.topBar}>
      <ThemedView>
        <ThemedText style={styles.topBarText}>Dla Ciebie</ThemedText>
      </ThemedView>
      <ThemedView>
        <ThemedText style={styles.topBarText}>Obserwowani</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

function StoriesBar() {
  return (
    <ThemedView style={styles.storiesBar}>
      <ThemedText>1111</ThemedText>
    </ThemedView>
  );
}

function Feed() {
  return (
    <ThemedView style={styles.feedSection}>
      <ThemedText>1111</ThemedText>
    </ThemedView>
  );
}
