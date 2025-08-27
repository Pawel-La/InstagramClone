import { ImageSourcePropType } from 'react-native';

import { Song } from './Song';
import { getMockUsers, User } from './User';

export type Post = {
  id: string;
  users: User[];
  postDate: Date;
  images: ImageSourcePropType[];
  likesUserIds: User['id'][];
  description: string;
  location?: string;
  song?: Song;
};

const defaultPostImage = require('@/src/assets/images/user_image.jpg');

export function getMockPost(): Post {
  return {
    id: 'post123',
    users: getMockUsers(4),
    postDate: new Date('2024-01-01T10:30:00'),
    images: [defaultPostImage],
    likesUserIds: ['123', '414', '222', '111'],
    description: 'very cool post wow look how cool\n\n\nI love posting very much',
    location: 'Los Angeles',
  };
}

export function getMockPosts(n: number) {
  const posts: Post[] = [];

  for (let i = 0; i < n; i++) {
    posts.push({
      id: `post${i}`,
      users: getMockUsers(i + 1),
      postDate: new Date('2025-08-26T10:30:00'),
      images: [defaultPostImage],
      likesUserIds: [`12${i}3`, `4${i}14`, `2${i}22`, `11${i}1`],
      description: 'very cool post wow look how cool\n\n\nI love posting very much',
    });
  }

  return posts;
}
