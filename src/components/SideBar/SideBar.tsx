import styles from './styles';

import { SidebarSelectedItemsProvider } from '@/src/context/SidebarSelectedItemsContext';
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
  return (
    <SidebarSelectedItemsProvider>
      <ThemedView style={styles.container}>
        <ThemedView style={{ flex: 1 }}>
          <MainLogoButton
            width={MAIN_LOGO_BUTTON_WIDTH}
            height={MAIN_LOGO_BUTTON_HEIGHT}
          />

          <ThemedView style={{ flex: 1 }}>
            <HomeButton size={NAV_ITEM_SIZE} />
            <SearchButton size={NAV_ITEM_SIZE} />
            <ExploreButton size={NAV_ITEM_SIZE} />
            <ReelsButton size={NAV_ITEM_SIZE} />
            <MessagesButton size={NAV_ITEM_SIZE} />
            <NotificationsButton size={NAV_ITEM_SIZE} />
            <CreatePostButton size={NAV_ITEM_SIZE} />
            <ProfileButton size={NAV_ITEM_SIZE} />
          </ThemedView>

          <MoreButton size={NAV_ITEM_SIZE} />
        </ThemedView>
      </ThemedView>
    </SidebarSelectedItemsProvider>
  );
}
