import styles from './styles';

import ThemedView from '@/src/components/ThemedView';
import FeedSection from './components/FeedSection';
import RightSection from './components/RightSection';

export default function Home() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.scrollScreen}>
        <FeedSection />
        <RightSection />
      </ThemedView>
    </ThemedView>
  );
}
