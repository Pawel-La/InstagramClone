import { PropsWithChildren } from 'react';
import { Pressable } from 'react-native';

import Svg, { Circle, Defs, LinearGradient, Stop } from 'react-native-svg';

import ProfileIcon from '@/src/components/ProfileIcon';
import ThemedScrollView from '@/src/components/ThemedScrollView';
import ThemedText from '@/src/components/ThemedText';
import ThemedView from '@/src/components/ThemedView';
import { getMockUsers, User } from '@/src/types/User';

import styles from './styles';

const defaultUserImage = require('@/src/assets/images/user_image.jpg');

const profileIconSize = 74 as const;
const gradientRingSize = 89 as const;
const gradientRingStrokeSize = 4 as const;

const users = getMockUsers(15);

export default function StoriesBar() {
  return (
    <ThemedScrollView
      style={styles.storiesBar}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.storiesBarContainer}
    >
      {users.map((user) => (
        <UserStoryIcon key={user.id} user={user} />
      ))}
    </ThemedScrollView>
  );
}

function UserStoryIcon({ user }: { user: User }) {
  // todo on click open up user's story
  function onPress() {}

  return (
    <Pressable onPress={onPress}>
      <ThemedView style={styles.userStoryIcon}>
        <DoubleBorder>
          <ProfileIcon size={profileIconSize} source={defaultUserImage} />
        </DoubleBorder>

        <ThemedText style={styles.userStoryIconText}>{user.nickName}</ThemedText>
      </ThemedView>
    </Pressable>
  );
}

function DoubleBorder({ children }: PropsWithChildren) {
  return (
    <ThemedView style={styles.doubleBorderContainer}>
      <GradientRing size={gradientRingSize} strokeWidth={gradientRingStrokeSize} />
      <ThemedView style={styles.innerBorder}>{children}</ThemedView>
    </ThemedView>
  );
}

type GradientRingProps = {
  size: number;
  strokeWidth: number;
};

function GradientRing({ size, strokeWidth }: GradientRingProps) {
  const radius = (size - strokeWidth) / 2;
  const center = size / 2;
  const style = {
    width: size,
    height: size,
  };

  return (
    <ThemedView style={[styles.gradientRing, style]}>
      <Svg width={size} height={size}>
        <Defs>
          <LinearGradient id="grad" x1="0" y1="1" x2="1" y2="0">
            <Stop offset="0" stopColor="#d6d917ff" />
            <Stop offset="1" stopColor="#ff00ccff" />
          </LinearGradient>
        </Defs>
        <Circle
          cx={center}
          cy={center}
          r={radius}
          stroke="url(#grad)"
          strokeWidth={strokeWidth}
          fill="none"
        />
      </Svg>
    </ThemedView>
  );
}
