import { StyleSheet } from 'react-native';

import { SidebarSelectedItemsProvider } from '@/src/context/SideBarSelectedItemsContext';
import useScreenSize from '@/src/hooks/useScreenVersion';
import { BORDER_SIZE, SPACING } from '@/src/utils/theme';

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

// todo handle the case of selected ids being === []

const NAV_ITEM_SIZE = 24 as const;

export default function Sidebar() {
  const screenSize = useScreenSize();

  const styles = StyleSheet.create({
    container: {
      width: screenSize === 'LG' ? 244 : 74,
      borderRightWidth: BORDER_SIZE.sm,
      paddingBottom: SPACING.xl,
      paddingTop: SPACING.xs,
      paddingHorizontal: SPACING.md,
    },
    subcontainer: {
      flex: 1,
    },
  });

  return (
    <SidebarSelectedItemsProvider>
      <ThemedView style={styles.container}>
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
