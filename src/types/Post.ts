import { ImageSourcePropType } from 'react-native';

import { PostComment } from './PostComment';
import { getMockLoggedInUser, User } from './User';

export type Post = {
  id: string;
  user: User;
  postDate: Date;
  images: ImageSourcePropType[];
  likesUserIds: User['id'][];
  description: string;
  comments: PostComment[];
};

const defaultPostImage = require('@/src/assets/images/user_image.jpg');

export function getMockPost() {
  return {
    id: 'post123',
    user: getMockLoggedInUser(),
    postDate: new Date('2025-08-26T10:30:00'),
    images: [defaultPostImage],
    likesUserIds: ['123', '414', '222', '111'],
    description: 'very cool post wow look how cool\n\n\nI love posting very much',
    comments: ['awesome post wow!', 'incredible'],
  };
}

export function getMockPosts(n: number) {
  const posts: Post[] = [];

  for (let i = 0; i < n; i++) {
    posts.push({
      id: `post${i}`,
      user: getMockLoggedInUser(),
      postDate: new Date('2025-08-26T10:30:00'),
      images: [defaultPostImage],
      likesUserIds: [`12${i}3`, `4${i}14`, `2${i}22`, `11${i}1`],
      description: 'very cool post wow look how cool\n\n\nI love posting very much',
      comments: ['awesome post wow!', 'incredible'],
    });
  }

  return posts;
}
