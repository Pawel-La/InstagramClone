import { useMemo } from 'react';
import { TextStyle } from 'react-native';

import ProfileIcon from '@/src/components/ProfileIcon';
import ThemedText from '@/src/components/ThemedText';
import ThemedView from '@/src/components/ThemedView';
import { useThemeContext } from '@/src/context/ThemeContext';
import { Post } from '@/src/types/Post';
import { Song } from '@/src/types/Song';
import { User } from '@/src/types/User';
import { stringifyTimeSince, timeSince } from '@/src/utils/date';

import styles from '../styles';

const SINGLE_AUTHOR_IMAGE_SIZE = 32 as const;

export default function PostDetails({ post }: { post: Post }) {
  return (
    <ThemedView style={styles.postDetailsContainer}>
      <AuthorsImages authors={post.users} size={SINGLE_AUTHOR_IMAGE_SIZE} />

      <ThemedView style={styles.postDetailsSubcontainer}>
        <AuthorsWithDate authors={post.users} date={post.postDate} />

        {post.location && <Location location={post.location} />}
        {post.song && <SongRow song={post.song} />}
      </ThemedView>

      <PostDetailsMoreButton />
    </ThemedView>
  );
}

function AuthorsImages({ authors, size }: { authors: User[]; size: number }) {
  if (authors.length === 1) {
    return <ProfileIcon size={size} source={authors[0].profileImage} />;
  }
  // todo handle case of 2+ authors
  return null;
}

function AuthorsWithDate({ authors, date }: { authors: User[]; date: Date }) {
  const { theme: theme } = useThemeContext();
  const dynamicStyle = useMemo(() => ({ color: theme.secondary }), [theme]);

  return (
    <ThemedView style={styles.row}>
      <Authors authors={authors} />
      <DotSeparator style={dynamicStyle} />
      <Date date={date} style={dynamicStyle} />
    </ThemedView>
  );
}

function Authors({ authors }: { authors: User[] }) {
  const [first, ...rest] = authors;
  let otherAuthors;

  if (rest.length === 0) {
    otherAuthors = '';
  } else if (rest.length === 1) {
    otherAuthors = ` i ${rest[0].nickName}`;
  } else {
    otherAuthors = ` i ${rest.length} innych`;
  }

  return (
    <ThemedText style={styles.postDetailAuthors}>
      {first.nickName}
      {otherAuthors}
    </ThemedText>
  );
}

function DotSeparator({ style }: { style?: TextStyle }) {
  return <ThemedText style={style}> • </ThemedText>;
}

function Date({ date, style }: { date: Date; style?: TextStyle }) {
  const timeSinceDate = timeSince(date);
  const timeSinceAsString = stringifyTimeSince(timeSinceDate);

  return <ThemedText style={style}>{timeSinceAsString}</ThemedText>;
}

function Location({ location }: { location: string }) {
  return <ThemedText style={styles.subText}>{location}</ThemedText>;
}

function SongRow({ song }: { song: Song }) {
  return (
    <ThemedView style={styles.row}>
      <ThemedText style={styles.subText}>{song.name}</ThemedText>
      <DotSeparator />
      <ThemedText style={styles.subText}>{song.author}</ThemedText>
    </ThemedView>
  );
}

function PostDetailsMoreButton() {
  return null;
}
