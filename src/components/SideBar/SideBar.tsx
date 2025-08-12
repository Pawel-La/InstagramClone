import React from 'react';
import { Image } from 'react-native';
import styles from './styles';

import { Href, usePathname, useRouter } from 'expo-router';

import {
  SIDEBAR_ITEM_ID,
  SideBarItemId,
  useSideBarSelectedItemsContextState,
  useSideBarSelectedItemsContextUpdater,
} from '@/src/context/SideBarSelectedItemsContext';
import { useThemeContext } from '@/src/context/ThemeContext';
import { BORDER_RADIUS } from '@/src/utils/theme';
import CustomButton from '../CustomButton';
import OuterBorder from '../OuterBorder';
import SideBarButton from '../SideBarButton';
import ThemedCustomIcon from '../ThemedCustomIcon';
import ThemedView from '../ThemedView';

// todo simplify sidebar logic, as the component starts to grow a little too big

// todo handle the case of selected ids being === []

export default function SideBar() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={{ flex: 1 }}>
        <MainLogoButton />

        <ThemedView style={{ flex: 1 }}>
          <HomeButton />
          <SearchButton />
          <ExploreButton />
          <ReelsButton />
          <MessagesButton />
          <NotificationsButton />
          <CreatePostButton />
          <ProfileButton />
        </ThemedView>

        <MoreButton />
      </ThemedView>
    </ThemedView>
  );
}

const navItemSize = 24;

function MainLogoButton() {
  const { theme: theme } = useThemeContext();
  const setIds = useSideBarSelectedItemsContextUpdater();
  const router = useRouter();

  return (
    <ThemedView style={styles.mainLogoContainer}>
      <CustomButton
        onPress={() => {
          setIds([SIDEBAR_ITEM_ID.HOME]);
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
  selectedIcon: React.ReactElement;
};

type NavItemWithPath = NavItem & {
  path: Href;
};

function HomeButton() {
  const homeItem: NavItemWithPath = {
    id: SIDEBAR_ITEM_ID.HOME,
    label: 'Strona główna',
    icon: <ThemedCustomIcon name="home" size={navItemSize} />,
    selectedIcon: <ThemedCustomIcon name="home_filled" size={navItemSize} />,
    path: '/',
  };

  return <NavButton navItem={homeItem} />;
}

function SearchButton() {
  const searchItem: NavItem = {
    id: SIDEBAR_ITEM_ID.SEARCH,
    label: 'Szukaj',
    icon: <ThemedCustomIcon name="search" size={navItemSize} strokeWidth={2} />,
    selectedIcon: (
      <ThemedCustomIcon name="search" size={navItemSize} strokeWidth={3} />
    ),
  };

  const ids = useSideBarSelectedItemsContextState();
  const setIds = useSideBarSelectedItemsContextUpdater();

  const isSelected = ids.includes(searchItem.id);

  function onPress() {
    function deselectButton() {
      setIds(ids.filter((id) => id !== searchItem.id));
    }

    function onReelsOrMessagesPage() {
      return (
        ids.length === 1 &&
        (ids[0] === SIDEBAR_ITEM_ID.REELS ||
          ids[0] === SIDEBAR_ITEM_ID.MESSAGES)
      );
    }

    if (isSelected) {
      deselectButton();
      return;
    }

    if (onReelsOrMessagesPage()) {
      setIds([...ids, searchItem.id]);
    } else {
      setIds([searchItem.id]);
    }
  }

  return SideBarItem({
    navItem: searchItem,
    isSelected: isSelected,
    onPress: onPress,
  });
}

function ExploreButton() {
  const exploreItem: NavItemWithPath = {
    id: SIDEBAR_ITEM_ID.EXPLORE,
    label: 'Eksploruj',
    icon: <ThemedCustomIcon name="explore_v1" size={navItemSize} />,
    selectedIcon: <ThemedCustomIcon name="explore_v2" size={navItemSize} />,
    path: '/explore',
  };

  return <NavButton navItem={exploreItem} />;
}

function ReelsButton() {
  const reelsItem: NavItemWithPath = {
    id: SIDEBAR_ITEM_ID.REELS,
    label: 'Rolki',
    icon: <ThemedCustomIcon name="reels_v1" size={navItemSize} />,
    selectedIcon: <ThemedCustomIcon name="reels_v2" size={navItemSize} />,
    // todo change navigation to /reels/ instead
    path: '/',
  };

  return <NavButton navItem={reelsItem} />;
}

function MessagesButton() {
  const messagesItem: NavItemWithPath = {
    id: SIDEBAR_ITEM_ID.MESSAGES,
    label: 'Wiadomości',
    icon: <ThemedCustomIcon name="direction" size={navItemSize} />,
    selectedIcon: (
      <ThemedCustomIcon name="direction_filled" size={navItemSize} />
    ),
    // todo change navigation to /direct/inbox/ instead
    path: '/',
  };

  return <NavButton navItem={messagesItem} />;
}

function NavButton({ navItem }: { navItem: NavItemWithPath }) {
  const ids = useSideBarSelectedItemsContextState();
  const setIds = useSideBarSelectedItemsContextUpdater();
  const router = useRouter();

  const isSelected = ids.includes(navItem.id);

  function onPress() {
    setIds([navItem.id]);
    router.navigate(navItem.path);
  }

  return SideBarItem({
    navItem: navItem,
    isSelected: isSelected,
    onPress: onPress,
  });
}

function NotificationsButton() {
  const notificationsItem: NavItem = {
    id: SIDEBAR_ITEM_ID.NOTIFICATIONS,
    label: 'Powiadomienia',
    icon: <ThemedCustomIcon name="heart_empty" size={navItemSize} />,
    selectedIcon: <ThemedCustomIcon name="heart_filled" size={navItemSize} />,
  };

  const ids = useSideBarSelectedItemsContextState();
  const setIds = useSideBarSelectedItemsContextUpdater();

  const isSelected = ids.includes(notificationsItem.id);

  function onPress() {
    function deselectButton() {
      setIds(ids.filter((id) => id !== notificationsItem.id));
    }

    if (isSelected) {
      deselectButton();
      return;
    }

    setIds([notificationsItem.id]);
  }

  return SideBarItem({
    navItem: notificationsItem,
    isSelected: isSelected,
    onPress: onPress,
  });
}

function CreatePostButton() {
  const createPostItem: Omit<NavItem, 'selectedIcon'> = {
    id: SIDEBAR_ITEM_ID.CREATE,
    label: 'Utwórz',
    icon: <ThemedCustomIcon name="add-box" size={navItemSize} />,
  };

  function onPress() {
    // todo add opening of modal
  }

  return (
    <SideBarButton
      icon={createPostItem.icon}
      text={createPostItem.label}
      onPress={onPress}
    />
  );
}

function ProfileButton() {
  const profileItem: NavItemWithPath = {
    id: SIDEBAR_ITEM_ID.PROFILE,
    label: 'Profil',
    icon: <ProfileIcon />,
    selectedIcon: <SelectedProfileIcon />,
    // todo change navigation to /[username]/ instead
    path: '/',
  };

  const setIds = useSideBarSelectedItemsContextUpdater();
  const router = useRouter();
  const pathname = usePathname();
  const isSelected = pathname === profileItem.path;

  function onPress() {
    setIds([profileItem.id]);
    router.navigate(profileItem.path);
  }

  return SideBarItem({
    navItem: profileItem,
    isSelected: isSelected,
    onPress: onPress,
  });
}

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

function MoreButton() {
  const moreButton: NavItem = {
    id: SIDEBAR_ITEM_ID.MORE,
    label: 'Więcej',
    icon: <ThreeHorizontalLinesIcon strokeWidth={2} />,
    selectedIcon: <ThreeHorizontalLinesIcon strokeWidth={3} />,
  };

  const ids = useSideBarSelectedItemsContextState();
  const setIds = useSideBarSelectedItemsContextUpdater();
  const isSelected = ids.includes(moreButton.id);

  function onPress() {
    setIds([...ids, moreButton.id]);
    // todo add modal
    // on modal close, deselect this button
  }

  return SideBarItem({
    navItem: moreButton,
    isSelected: isSelected,
    onPress: onPress,
  });
}

function ThreeHorizontalLinesIcon({ strokeWidth }: { strokeWidth: number }) {
  return (
    <ThemedCustomIcon
      name="three-horizontal-lines"
      size={navItemSize}
      strokeWidth={strokeWidth}
    />
  );
}

type sideBarItemProps = {
  navItem: NavItem;
  isSelected: boolean;
  onPress: () => void;
};

function SideBarItem({ navItem, isSelected, onPress }: sideBarItemProps) {
  return (
    <SideBarButton
      icon={isSelected ? navItem.selectedIcon : navItem.icon}
      text={navItem.label}
      onPress={onPress}
      textStyle={isSelected ? styles.selectedButtonText : undefined}
    />
  );
}
