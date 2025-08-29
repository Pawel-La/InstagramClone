import ThemedFlatList from '@/src/components/ThemedFlatList';
import ThemedView from '@/src/components/ThemedView';
import useScreenSize from '@/src/hooks/useScreenVersion';
import { getMockPost, Post } from '@/src/types/Post';

import PostContainer from './components/PostContainer';
import RightSection from './components/RightSection';

import styles, { useRowStyle } from './styles';

const mockedPosts = [getMockPost(), getMockPost()];

export default function Home() {
  const { screenWidth: screenWidth, screenSize: screenSize } = useScreenSize();
  const showRightSection = screenSize === 'LG' || screenSize === 'MD';
  const { firstRowStyle, otherRowsStyle } = useRowStyle(showRightSection, screenWidth);

  const renderPost = ({ item, index }: { item: Post; index: number }) => {
    if (index === 0) {
      return (
        <ThemedView style={[styles.container, firstRowStyle]}>
          <PostContainer post={item} withHeader />

          {showRightSection && <RightSection />}
        </ThemedView>
      );
    } else {
      return (
        <ThemedView style={[styles.container, otherRowsStyle]}>
          <PostContainer post={item} />
        </ThemedView>
      );
    }
  };

  return (
    <ThemedFlatList
      data={mockedPosts}
      keyExtractor={(post) => post.id}
      renderItem={renderPost}
      contentContainerStyle={styles.listContainer}
    />
  );
}
