import { ImageSourcePropType } from 'react-native';

export type User = {
  id: string;
  name: string;
  nickName: string;
  profileImage: ImageSourcePropType;
};

const defaultUserImage = require('@/src/assets/images/user_image.jpg');

export function getMockLoggedInUser() {
  return {
    id: '134',
    name: 'Paweł Lamża',
    nickName: 'pawel_lamza',
    profileImage: defaultUserImage,
  };
}

export function getMockUsers(n: number) {
  const users: User[] = [];

  for (let i = 0; i < n; i++) {
    users.push({
      id: `id${i}`,
      name: `user${i}`,
      nickName: `u_nick${i}`,
      profileImage: defaultUserImage,
    });
  }

  return users;
}
