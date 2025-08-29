import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { SidebarSelectedItemsProvider } from '@/src/context/SideBarSelectedItemsContext';
import useScreenSize from '@/src/hooks/useScreenVersion';

import ThemedView from '../ThemedView';
import { CreatePostButton } from './components/CreatePostButton';
import { MainLogoButton } from './components/MainLogoButton';
import { MoreButton } from './components/MoreButton';
import {
  ExploreButton,
  HomeButton,
  MessagesButton,
  ReelsButton,
} from './components/NavigationButtons';
import { NotificationsButton } from './components/NotificationsButton';
import { ProfileButton } from './components/ProfileButton';
import { SearchButton } from './components/SearchButton';

import styles from './styles';

// todo handle the case of selected ids being === []

const SIDEBAR_BIG_WIDTH = 244 as const;
const SIDEBAR_SMALL_WIDTH = 74 as const;
const NAV_ITEM_SIZE = 24 as const;

export default function Sidebar() {
  const { width: width } = useSidebar();

  const dynamicStyles = useMemo(() => {
    return StyleSheet.create({
      container: {
        width: width,
      },
    });
  }, [width]);

  return (
    <SidebarSelectedItemsProvider>
      <ThemedView style={[styles.container, dynamicStyles.container]}>
        <ThemedView style={styles.subcontainer}>
          <MainLogoButton smallScreenIconSize={NAV_ITEM_SIZE} />

          <ThemedView style={styles.subcontainer}>
            <HomeButton iconSize={NAV_ITEM_SIZE} />
            <SearchButton iconSize={NAV_ITEM_SIZE} />
            <ExploreButton iconSize={NAV_ITEM_SIZE} />
            <ReelsButton iconSize={NAV_ITEM_SIZE} />
            <MessagesButton iconSize={NAV_ITEM_SIZE} />
            <NotificationsButton iconSize={NAV_ITEM_SIZE} />
            <CreatePostButton iconSize={NAV_ITEM_SIZE} />
            <ProfileButton iconSize={NAV_ITEM_SIZE} />
          </ThemedView>

          <MoreButton iconSize={NAV_ITEM_SIZE} />
        </ThemedView>
      </ThemedView>
    </SidebarSelectedItemsProvider>
  );
}

export function useSidebar() {
  const { screenSize: screenSize } = useScreenSize();

  return { width: screenSize === 'LG' ? SIDEBAR_BIG_WIDTH : SIDEBAR_SMALL_WIDTH };
}
