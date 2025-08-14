import { ImageSourcePropType } from 'react-native';

export type User = {
  id: string;
  name: string;
  nickName: string;
  icon: ImageSourcePropType;
};

const defaultUserImage = require('@/src/assets/images/user_image.jpg');

export function getRandomUsers(n: number) {
  const users: User[] = [];

  for (let i = 0; i < n; i++) {
    users.push({
      id: `id${i}`,
      name: `user${i}`,
      nickName: `u_nick${i}`,
      icon: defaultUserImage,
    });
  }

  return users;
}
