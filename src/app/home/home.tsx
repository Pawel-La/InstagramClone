import styles from './styles';

import ThemedView from '@/src/components/ThemedView';
import useScreenSize from '@/src/hooks/useScreenVersion';
import FeedSection from './components/FeedSection';
import RightSection from './components/RightSection';

export default function Home() {
  const screenSize = useScreenSize();
  const showRightSection = screenSize === 'LG' || screenSize === 'MD';

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.scrollScreen}>
        <FeedSection />
        {showRightSection && <RightSection />}
      </ThemedView>
    </ThemedView>
  );
}
