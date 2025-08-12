import ThemedText from '@/src/components/ThemedText';
import ThemedView from '@/src/components/ThemedView';
import { usePageVariant } from './FeedSection.hooks';
import styles from './styles';
import TopBar from './TopBar';

export default function FeedSection() {
  const { variant, showHome, showFollowing } = usePageVariant();

  return (
    <ThemedView style={styles.mainSection}>
      <TopBar
        variant={variant}
        showHome={showHome}
        showFollowing={showFollowing}
      />
      <StoriesBar />
      <Feed />
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
