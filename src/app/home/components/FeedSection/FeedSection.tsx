import ThemedView from '@/src/components/ThemedView';

import Feed from './components/Feed';
import StoriesBar from './components/StoriesBar';
import TopBar from './components/TopBar';
import { usePageVariant } from './FeedSection.hooks';
import styles from './styles';

export default function FeedSection() {
  const { variant, showHome, showFollowing } = usePageVariant();

  return (
    <ThemedView style={styles.container}>
      <TopBar variant={variant} showHome={showHome} showFollowing={showFollowing} />
      <StoriesBar />
      <Feed />
    </ThemedView>
  );
}
