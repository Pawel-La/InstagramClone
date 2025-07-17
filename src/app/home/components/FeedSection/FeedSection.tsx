import ThemedView from "@/src/components/ThemedView";
import styles from "./styles";

import Feed from "../Feed";
import StoriesBar from "../StoriesBar";
import TopBar from "../TopBar";

export default function FeedSection() {
  return (
    <ThemedView style={styles.mainSection}>
      <TopBar />
      <StoriesBar />
      <Feed />
    </ThemedView>
  );
}
