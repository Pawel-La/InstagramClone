import { PropsWithChildren } from 'react';
import { ImageSourcePropType, StyleSheet, ViewStyle } from 'react-native';

import Svg, { Circle, Defs, LinearGradient, Stop } from 'react-native-svg';

import ProfileIcon from '@/src/components/ProfileIcon';
import ThemedScrollView from '@/src/components/ThemedScrollView';
import ThemedText from '@/src/components/ThemedText';
import ThemedView from '@/src/components/ThemedView';
import {
  BORDER_RADIUS,
  BORDER_SIZE,
  FONT_SIZE,
  SPACING,
} from '@/src/utils/theme';

const defaultUserImage = require('@/src/assets/images/user_image.jpg');

const profileIconSize = 74;

type User = {
  id: string;
  name: string;
  icon: ImageSourcePropType;
};

const users: User[] = [
  { id: '1', name: 'user1user1111', icon: defaultUserImage },
  { id: '2', name: 'user2user2111', icon: defaultUserImage },
  { id: '3', name: 'user3user3111', icon: defaultUserImage },
  { id: '4', name: 'user4user4111', icon: defaultUserImage },
  { id: '5', name: 'user5user5111', icon: defaultUserImage },
  { id: '6', name: 'user6user6111', icon: defaultUserImage },
  { id: '7', name: 'user7user7111', icon: defaultUserImage },
  { id: '8', name: 'user8user8111', icon: defaultUserImage },
  { id: '9', name: 'user9user9111', icon: defaultUserImage },
  { id: '10', name: 'user4user4111', icon: defaultUserImage },
  { id: '11', name: 'user5user5111', icon: defaultUserImage },
  { id: '12', name: 'user6user6111', icon: defaultUserImage },
  { id: '13', name: 'user7user7111', icon: defaultUserImage },
  { id: '14', name: 'user8user8111', icon: defaultUserImage },
  { id: '15', name: 'user9user9111', icon: defaultUserImage },
];

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

// todo this component should be pressable and on click open up user's story
function UserStoryIcon({ user }: { user: User }) {
  return (
    <ThemedView style={styles.userStoryIcon}>
      <DoubleBorder>
        <ProfileIcon size={profileIconSize} source={defaultUserImage} />
      </DoubleBorder>

      <ThemedText style={styles.userStoryIconText}>{user.name}</ThemedText>
    </ThemedView>
  );
}

function DoubleBorder({ children }: PropsWithChildren) {
  return (
    <ThemedView
      style={{
        position: 'relative',
      }}
    >
      <GradientRing size={89} strokeWidth={4} style={{ left: -5, top: -5 }} />
      <ThemedView style={styles.innerBorder}>{children}</ThemedView>
    </ThemedView>
  );
}

type GradientRingProps = {
  size: number;
  strokeWidth: number;
  style?: ViewStyle;
};

function GradientRing({ size, strokeWidth, style }: GradientRingProps) {
  const radius = (size - strokeWidth) / 2;
  const center = size / 2;

  return (
    <ThemedView
      style={[
        {
          width: size,
          height: size,
          position: 'absolute',
        },
        style,
      ]}
    >
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

const styles = StyleSheet.create({
  storiesBar: {
    width: 630,
    height: 124,
    flexGrow: 0,
  },
  storiesBarContainer: {
    padding: SPACING.xs,
    gap: SPACING.xl,
  },
  userStoryIcon: {
    padding: SPACING.xxs,
    flexDirection: 'column',
    alignItems: 'center',
    gap: SPACING.xs,
  },
  userStoryIconText: {
    fontSize: FONT_SIZE.xs,
  },
  innerBorder: {
    borderWidth: BORDER_SIZE.lg,
    borderRadius: BORDER_RADIUS.round,
    borderColor: 'transparent',
  },
});
