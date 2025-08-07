import React from 'react';
import { Image } from 'react-native';
import styles from './styles';

import { Href, useRouter } from 'expo-router';

import {
  SideBarItemId,
  useSideBarSelectedItemsContext,
} from '@/src/context/SideBarSelectedItemsContext';
import { useThemeContext } from '@/src/context/ThemeContext';
import { BORDER_RADIUS } from '@/src/utils/theme';
import CustomButton from '../CustomButton';
import OuterBorder from '../OuterBorder';
import SideBarButton from '../SideBarButton';
import ThemedCustomIcon from '../ThemedCustomIcon';
import ThemedView from '../ThemedView';

// todo simplify sidebar logic, as the component starts to grow a little too big

export default function SideBar() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={{ flex: 1 }}>
        <MainLogoButton />

        <ThemedView style={{ flex: 1 }}>
          <NavigationButtons />
        </ThemedView>

        <MoreButton />
      </ThemedView>
    </ThemedView>
  );
}

function MainLogoButton() {
  const { theme: theme } = useThemeContext();
  const { setIds: setIds } = useSideBarSelectedItemsContext();
  const router = useRouter();

  return (
    <ThemedView style={styles.mainLogoContainer}>
      <CustomButton
        onPress={() => {
          setIds([SideBarItemId.home]);
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

function NavigationButtons() {
  const { ids: ids, setIds: setIds } = useSideBarSelectedItemsContext();
  const router = useRouter();

  return (
    <>
      {navItems.map((navItem) => {
        const onPress = () => {
          setIds([navItem.id]);
          navItem.path && router.navigate(navItem.path);
        };
        const isSelected = ids.includes(navItem.id);

        return (
          <SideBarButton
            key={navItem.id}
            icon={isSelected ? navItem.selectedIcon : navItem.icon}
            text={navItem.label}
            onPress={onPress}
            textStyle={isSelected ? styles.selectedButtonText : undefined}
          />
        );
      })}
    </>
  );
}

type NavItem = {
  id: SideBarItemId;
  label: string;
  icon: React.ReactElement;
  selectedIcon: React.ReactElement;
  path?: Href;
};

const navItemSize = 24;

const navItems: NavItem[] = [
  {
    id: SideBarItemId.home,
    label: 'Strona główna',
    icon: <ThemedCustomIcon name="home" size={navItemSize} />,
    selectedIcon: <ThemedCustomIcon name="home_filled" size={navItemSize} />,
    path: '/',
  },
  {
    id: SideBarItemId.search,
    label: 'Szukaj',
    icon: <ThemedCustomIcon name="search" size={navItemSize} strokeWidth={2} />,
    selectedIcon: (
      <ThemedCustomIcon name="search" size={navItemSize} strokeWidth={3} />
    ),
  },
  {
    id: SideBarItemId.explore,
    label: 'Eksploruj',
    icon: <ThemedCustomIcon name="explore_v1" size={navItemSize} />,
    selectedIcon: <ThemedCustomIcon name="explore_v2" size={navItemSize} />,
    path: '/explore',
  },
  {
    id: SideBarItemId.reels,
    label: 'Rolki',
    icon: <ThemedCustomIcon name="reels_v1" size={navItemSize} />,
    selectedIcon: <ThemedCustomIcon name="reels_v2" size={navItemSize} />,
  },
  {
    id: SideBarItemId.messages,
    label: 'Wiadomości',
    icon: <ThemedCustomIcon name="direction" size={navItemSize} />,
    selectedIcon: (
      <ThemedCustomIcon name="direction_filled" size={navItemSize} />
    ),
  },
  {
    id: SideBarItemId.notifications,
    label: 'Powiadomienia',
    icon: <ThemedCustomIcon name="heart_empty" size={navItemSize} />,
    selectedIcon: <ThemedCustomIcon name="heart_filled" size={navItemSize} />,
  },
  {
    id: SideBarItemId.create,
    label: 'Utwórz',
    icon: <ThemedCustomIcon name="add-box" size={navItemSize} />,
    selectedIcon: <ThemedCustomIcon name="add-box" size={navItemSize} />,
  },
  {
    id: SideBarItemId.profile,
    label: 'Profil',
    icon: <ProfileIcon />,
    selectedIcon: <SelectedProfileIcon />,
  },
];

function ProfileIcon() {
  return (
    <Image
      style={{
        width: navItemSize,
        height: navItemSize,
        borderRadius: BORDER_RADIUS.round,
      }}
      source={require('@/src/assets/images/user_image.jpg')}
    />
  );
}

function SelectedProfileIcon() {
  const { theme: theme } = useThemeContext();

  const borderStyle = {
    borderColor: theme.primary,
    borderRadius: BORDER_RADIUS.round,
  };

  return (
    <OuterBorder
      contentWidth={navItemSize}
      contentHeight={navItemSize}
      borderWidth={2}
      borderStyle={borderStyle}
    >
      <ProfileIcon />
    </OuterBorder>
  );
}

const moreButton: NavItem = {
  id: SideBarItemId.more,
  label: 'Więcej',
  icon: (
    <ThemedCustomIcon name="three-horizontal-lines" size={24} strokeWidth={2} />
  ),
  selectedIcon: (
    <ThemedCustomIcon name="three-horizontal-lines" size={24} strokeWidth={3} />
  ),
};

function MoreButton() {
  const { ids: ids, setIds: setIds } = useSideBarSelectedItemsContext();
  const isSelected = ids.includes(moreButton.id);

  return (
    <SideBarButton
      icon={isSelected ? moreButton.selectedIcon : moreButton.icon}
      text={moreButton.label}
      onPress={() => {
        setIds([SideBarItemId.more]);
      }}
      textStyle={isSelected ? styles.selectedButtonText : undefined}
    />
  );
}
