import { StyleSheet, useWindowDimensions } from 'react-native';

import { SidebarSelectedItemsProvider } from '@/src/context/SidebarSelectedItemsContext';
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

const MAIN_LOGO_BUTTON_WIDTH = 100 as const;
const MAIN_LOGO_BUTTON_HEIGHT = 32 as const;
const NAV_ITEM_SIZE = 24 as const;

export default function Sidebar() {
  const { width } = useWindowDimensions();
  const SidebarVersion = width > 1264 ? 'big' : 'small';

  const styles = StyleSheet.create({
    container: {
      width: SidebarVersion ? 244 : 'auto',
      borderRightWidth: BORDER_SIZE.sm,
      paddingBottom: SPACING.xl,
      paddingTop: SPACING.xs,
      paddingHorizontal: SPACING.md,
    },
  });

  return (
    <SidebarSelectedItemsProvider>
      <ThemedView style={styles.container}>
        <ThemedView style={{ flex: 1 }}>
          <MainLogoButton
            width={MAIN_LOGO_BUTTON_WIDTH}
            height={MAIN_LOGO_BUTTON_HEIGHT}
          />

          <ThemedView style={{ flex: 1 }}>
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
