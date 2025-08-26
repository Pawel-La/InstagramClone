import ThemedText from '@/src/components/ThemedText';
import ThemedView from '@/src/components/ThemedView';
import { getMockPosts, Post } from '@/src/types/Post';

import PostDetails from './components/PostDetails';

import styles from './styles';

const mockedPosts = getMockPosts(1);

export function Feed() {
  return (
    <ThemedView style={styles.container}>
      {mockedPosts.map((post) => (
        <FeedPost post={post} key={post.id} />
      ))}
    </ThemedView>
  );
}

function FeedPost({ post }: { post: Post }) {
  return (
    <ThemedView style={styles.postContainer}>
      <PostDetails />
      <PostImages />
      <PostActions />
      <PostLikes />
      <PostDescription />
      <PostCommentSection />
    </ThemedView>
  );
}

function PostImages() {
  return <ThemedText>1111</ThemedText>;
}

function PostActions() {
  return <ThemedText>1111</ThemedText>;
}

function PostLikes() {
  return <ThemedText>1111</ThemedText>;
}

function PostDescription() {
  return <ThemedText>1111</ThemedText>;
}

function PostCommentSection() {
  return <ThemedText>1111</ThemedText>;
}
