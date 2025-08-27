import { useMemo } from 'react';
import { TextStyle } from 'react-native';

import OverlappingProfileIcons from '@/src/components/OverlappingIcons';
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
const MULTIPLE_AUTHORS_IMAGE_SIZE = 24 as const;

export default function PostDetails({ post }: { post: Post }) {
  return (
    <ThemedView style={styles.postDetailsContainer}>
      <AuthorsImages
        authors={post.users}
        singleAuthorSize={SINGLE_AUTHOR_IMAGE_SIZE}
        multipleAuthorsSize={MULTIPLE_AUTHORS_IMAGE_SIZE}
        multipleAuthorsContainerSize={SINGLE_AUTHOR_IMAGE_SIZE}
      />

      <ThemedView style={styles.postDetailsSubcontainer}>
        <AuthorsWithDate authors={post.users} date={post.postDate} />

        {post.location && <Location location={post.location} />}
        {post.song && <SongRow song={post.song} />}
      </ThemedView>

      <PostDetailsMoreButton />
    </ThemedView>
  );
}

function AuthorsImages({
  authors,
  singleAuthorSize,
  multipleAuthorsSize,
  multipleAuthorsContainerSize,
}: {
  authors: User[];
  singleAuthorSize: number;
  multipleAuthorsSize: number;
  multipleAuthorsContainerSize: number;
}) {
  // todo for authors that have something in Story:
  // add colorful outside circle
  // add navigation to the story itself /stories/[authorID]

  if (authors.length === 1) {
    // todo make this icon be navigation to the user profile + show user's profile preview
    return <ProfileIcon size={singleAuthorSize} source={authors[0].profileImage} />;
  }

  return (
    <OverlappingProfileIcons
      containerSize={multipleAuthorsContainerSize}
      size={multipleAuthorsSize}
      frontIcon={authors[0].profileImage}
      backIcon={authors[1].profileImage}
    />
  );
}

function AuthorsWithDate({ authors, date }: { authors: User[]; date: Date }) {
  const { theme: theme } = useThemeContext();
  const dynamicStyle = useMemo(() => ({ color: theme.secondary }), [theme]);

  // todo make date to navigate to the actual post /p/[postID] in full view
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

  // todo make nicknames to be navigation to the user's profile + show user's profile preview
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

  // todo make date showing the date on hover
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
  // for now decided to not do it, as the functionality is not a priority
  return null;
}
