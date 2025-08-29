import { Image, ImageSourcePropType } from 'react-native';

import ThemedText from '@/src/components/ThemedText';
import ThemedView from '@/src/components/ThemedView';
import { Post } from '@/src/types/Post';

import PostDetails from './components/PostDetails';

import styles from './styles';

export function FeedPost({ post }: { post: Post }) {
  const img = require('@/src/assets/images/user_image.jpg');

  return (
    <ThemedView style={styles.postContainer}>
      <PostDetails post={post} />
      <PostImage source={img} />

      <ThemedView>
        <PostActions />
        <PostLikes />
        <PostDescription />
        <PostCommentSection />
      </ThemedView>
    </ThemedView>
  );
}

function PostImage({ source }: { source: ImageSourcePropType }) {
  return (
    <Image
      source={source}
      // resizeMode="contain"
      style={{
        width: '100%',
        height: 'auto',
        // todo aspect ratio should be dynamic
        aspectRatio: 1,
      }}
    />
  );
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
