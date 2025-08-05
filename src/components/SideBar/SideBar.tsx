import React from 'react';
import {
  Image,
  PressableProps,
  StyleProp,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import styles from './styles';

import { Href, useRouter } from 'expo-router';

import {
  SideBarItemId,
  useSelectedSideBarItemIdContext,
} from '@/src/context/SelectedSideBarItemIdContext';
import { useThemeContext } from '@/src/context/ThemeContext';
import { BORDER_RADIUS } from '@/src/utils/theme';
import CustomButton from '../CustomButton';
import ThemedCustomIcon from '../ThemedCustomIcon';
import ThemedIcon from '../ThemedIcon';
import ThemedText from '../ThemedText';
import ThemedView from '../ThemedView';

// todo simplify sidebar logic, as the component starts to grow a little too big

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
  const { setId: setId } = useSelectedSideBarItemIdContext();
  const router = useRouter();

  return (
    <ThemedView style={styles.mainLogoContainer}>
      <CustomButton
        onPress={() => {
          setId(SideBarItemId.home);
          router.navigate('/');
        }}
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
  id: SideBarItemId;
  label: string;
  icon: React.ReactElement;
  path?: Href;
};

const navItems: NavItem[] = [
  {
    id: SideBarItemId.home,
    label: 'Strona główna',
    icon: <ThemedIcon name="home" size={24} />,
    path: '/',
  },
  {
    id: SideBarItemId.search,
    label: 'Szukaj',
    icon: <ThemedIcon name="search" size={24} />,
  },
  {
    id: SideBarItemId.explore,
    label: 'Eksploruj',
    icon: <ThemedIcon name="explore" size={24} />,
    path: '/explore',
  },
  {
    id: SideBarItemId.reels,
    label: 'Rolki',
    icon: <ThemedIcon name="movie" size={24} />,
  },
  {
    id: SideBarItemId.messages,
    label: 'Wiadomości',
    icon: <ThemedCustomIcon name="direction" size={24} />,
  },
  {
    id: SideBarItemId.notifications,
    label: 'Powiadomienia',
    icon: <ThemedCustomIcon name="heart" size={24} />,
  },
  {
    id: SideBarItemId.create,
    label: 'Utwórz',
    icon: <ThemedIcon name="add-box" size={24} />,
  },
  {
    id: SideBarItemId.profile,
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
  const { id: id, setId: setId } = useSelectedSideBarItemIdContext();
  const router = useRouter();

  return (
    <ThemedView style={{ flex: 1 }}>
      {navItems.map((navItem) => {
        const onPress = () => {
          setId(navItem.id);
          if (navItem.path) {
            router.navigate(navItem.path!);
          }
        };

        return (
          <SideBarButton
            key={navItem.id}
            icon={navItem.icon}
            text={navItem.label}
            onPress={onPress}
            textStyle={id === navItem.id ? styles.selectedButton : undefined}
          />
        );
      })}
    </ThemedView>
  );
}

function MoreButton() {
  const { id: id, setId: setId } = useSelectedSideBarItemIdContext();

  return (
    <SideBarButton
      icon={<ThemedCustomIcon name="more" size={24} />}
      text="Więcej"
      onPress={() => {
        setId(SideBarItemId.more);
      }}
      textStyle={id === SideBarItemId.more ? styles.selectedButton : undefined}
    />
  );
}

type SideBarButtonProps = {
  icon: React.ReactElement;
  text: string;
  onPress?: PressableProps['onPress'];
  viewStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

function SideBarButton({
  icon,
  text,
  onPress,
  viewStyle,
  textStyle,
}: SideBarButtonProps) {
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
            viewStyle,
          ]}
        >
          {icon}
          <ThemedText style={[styles.sideBarButtonText, textStyle]}>
            {text}
          </ThemedText>
        </View>
      )}
    />
  );
}
