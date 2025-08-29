import ThemedView from '@/src/components/ThemedView';
import { Post } from '@/src/types/Post';

import { usePageVariant } from './PostContainer.hooks';
import styles from '../../styles';
import FeedPost from '../FeedPost';
import StoriesBar from '../StoriesBar';
import TopBar from '../TopBar';

export default function PostContainer({
  post,
  withHeader = false,
}: {
  post: Post;
  withHeader?: boolean;
}) {
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
