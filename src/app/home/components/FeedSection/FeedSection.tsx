import ThemedView from '@/src/components/ThemedView';
import { Feed } from './Feed';
import { usePageVariant } from './FeedSection.hooks';
import StoriesBar from './StoriesBar';
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
