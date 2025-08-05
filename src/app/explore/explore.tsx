import ThemedView from '@/src/components/ThemedView';
import styles from './styles';

export default function Explore() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.scrollScreen}></ThemedView>
    </ThemedView>
  );
}
