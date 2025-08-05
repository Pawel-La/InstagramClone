import React from 'react';
import { Image, PressableProps, View } from 'react-native';
import styles from './styles';

import { Href, useRouter } from 'expo-router';

import { useThemeContext } from '@/src/context/ThemeContext';
import { BORDER_RADIUS } from '@/src/utils/theme';
import CustomButton from '../CustomButton';
import ThemedCustomIcon from '../ThemedCustomIcon';
import ThemedIcon from '../ThemedIcon';
import ThemedText from '../ThemedText';
import ThemedView from '../ThemedView';

export default function SideBar() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={{ flex: 1 }}>
        <MainLogoButton />
        <NavigationButtons />
        <MoreButton />
      </ThemedView>
    </ThemedView>
  );
}

function MainLogoButton() {
  const { theme: theme } = useThemeContext();
  const router = useRouter();

  return (
    <ThemedView style={styles.mainLogoContainer}>
      <CustomButton
        onPress={() => router.navigate('/')}
        renderContent={({ isPressed }) => (
          <ThemedCustomIcon
            name="instagram-written"
            width={100}
            height={32}
            primaryColor={isPressed ? theme.secondary : theme.primary}
          />
        )}
      />
    </ThemedView>
  );
}

type NavItem = {
  label: string;
  icon: React.ReactElement;
  path?: Href;
};

const navItems: NavItem[] = [
  {
    label: 'Strona główna',
    icon: <ThemedIcon name="home" size={24} />,
    path: '/',
  },
  {
    label: 'Szukaj',
    icon: <ThemedIcon name="search" size={24} />,
  },
  {
    label: 'Eksploruj',
    icon: <ThemedIcon name="explore" size={24} />,
    path: '/explore',
  },
  {
    label: 'Rolki',
    icon: <ThemedIcon name="movie" size={24} />,
  },
  {
    label: 'Wiadomości',
    icon: <ThemedCustomIcon name="direction" size={24} />,
  },
  {
    label: 'Powiadomienia',
    icon: <ThemedCustomIcon name="heart" size={24} />,
  },
  {
    label: 'Utwórz',
    icon: <ThemedIcon name="add-box" size={24} />,
  },
  {
    label: 'Profil',
    icon: (
      <Image
        style={{
          width: 24,
          height: 24,
          borderRadius: BORDER_RADIUS.lg,
        }}
        source={require('@/src/assets/images/user_image.jpg')}
      />
    ),
  },
];

function NavigationButtons() {
  const router = useRouter();

  return (
    <ThemedView style={{ flex: 1 }}>
      {navItems.map((navItem) => {
        const onPress = navItem.path
          ? () => router.navigate(navItem.path!)
          : undefined;

        return (
          <SideBarButton
            key={navItem.label}
            icon={navItem.icon}
            text={navItem.label}
            onPress={onPress}
          />
        );
      })}
    </ThemedView>
  );
}

function MoreButton() {
  return (
    <SideBarButton
      icon={<ThemedCustomIcon name="more" size={24} />}
      text="Więcej"
    />
  );
}

type SideBarButtonProps = {
  icon: React.ReactElement;
  text: string;
  onPress?: PressableProps['onPress'];
};

function SideBarButton({ icon, text, onPress }: SideBarButtonProps) {
  const { theme: theme } = useThemeContext();

  return (
    <CustomButton
      onPress={onPress}
      renderContent={({ isPressed, isHovered }) => (
        <View
          style={[
            styles.sideBarButton,
            {
              backgroundColor: isHovered
                ? theme.background_hovered
                : theme.background,
              transform: [{ scale: isPressed ? 0.96 : 1 }],
            },
          ]}
        >
          {icon}
          <ThemedText style={styles.sideBarButtonText}>{text}</ThemedText>
        </View>
      )}
    />
  );
}
