import ThemedText from '@/src/components/ThemedText';
import ThemedView from '@/src/components/ThemedView';
import { useThemeContext } from '@/src/context/ThemeContext';

import styles from '../styles';

export default function PostDetails() {
  return (
    <ThemedView style={styles.postDetails}>
      <PostAuthorImage />
      <PostDetailsTexts />
      <PostDetailsMoreButton />
    </ThemedView>
  );
}

function PostAuthorImage() {
  return <ThemedText>Post author image</ThemedText>;
}

function PostDetailsTexts() {
  const { theme: theme } = useThemeContext();

  return (
    <ThemedView style={styles.postDetailsTexts}>
      <ThemedView style={{ flexDirection: 'row' }}>
        <ThemedText>1111 i x innych</ThemedText>
        <ThemedText style={{ color: theme.secondary }}> • 8 godz.</ThemedText>
      </ThemedView>

      <ThemedText>2222</ThemedText>
    </ThemedView>
  );
}

function PostDetailsMoreButton() {
  return <ThemedText>1111</ThemedText>;
}
