import ThemedFlatList from '@/src/components/ThemedFlatList';
import ThemedView from '@/src/components/ThemedView';
import useScreenSize from '@/src/hooks/useScreenVersion';
import { getMockPost, Post } from '@/src/types/Post';

import FeedPost from './components/FeedPost';
import RightSection from './components/RightSection';
import StoriesBar from './components/StoriesBar';
import TopBar from './components/TopBar';
import { usePageVariant } from './home.hooks';

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

function PostContainer({ post, withHeader = false }: { post: Post; withHeader?: boolean }) {
  const { variant, showHome, showFollowing } = usePageVariant();

  // todo pass variant to StoriesBar and Feed and show content accordingly
  return (
    <ThemedView style={styles.postContainer}>
      {withHeader && <TopBar variant={variant} showHome={showHome} showFollowing={showFollowing} />}
      {withHeader && <StoriesBar />}
      <FeedPost post={post} key={post.id} />
    </ThemedView>
  );
}
