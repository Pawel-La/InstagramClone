import { useRouter } from 'expo-router';

import ThemedCustomIcon from '@/src/components/ThemedCustomIcon';
import {
  useSidebarSelectedItemsStateContext,
  useSidebarSelectedItemsUpdaterContext,
} from '@/src/context/SidebarSelectedItemsContext';
import { SidebarNavItem } from '../Sidebar.types';
import { SidebarItemButton } from './SidebarItemButton';

function HomeButton({ size }: { size: number }) {
  const homeItem: SidebarNavItem = {
    id: 'HOME',
    label: 'Strona główna',
    icon: <ThemedCustomIcon name="home" size={size} />,
    selectedIcon: <ThemedCustomIcon name="home_filled" size={size} />,
    path: '/',
  };

  return <NavButton item={homeItem} />;
}

function ExploreButton({ size }: { size: number }) {
  const exploreItem: SidebarNavItem = {
    id: 'EXPLORE',
    label: 'Eksploruj',
    icon: <ThemedCustomIcon name="explore_v1" size={size} />,
    selectedIcon: <ThemedCustomIcon name="explore_v2" size={size} />,
    path: '/explore',
  };

  return <NavButton item={exploreItem} />;
}

function ReelsButton({ size }: { size: number }) {
  const reelsItem: SidebarNavItem = {
    id: 'REELS',
    label: 'Rolki',
    icon: <ThemedCustomIcon name="reels_v1" size={size} />,
    selectedIcon: <ThemedCustomIcon name="reels_v2" size={size} />,
    // todo change navigation to /reels/ instead
    path: '/',
  };

  return <NavButton item={reelsItem} />;
}

function MessagesButton({ size }: { size: number }) {
  const messagesItem: SidebarNavItem = {
    id: 'MESSAGES',
    label: 'Wiadomości',
    icon: <ThemedCustomIcon name="direction" size={size} />,
    selectedIcon: <ThemedCustomIcon name="direction_filled" size={size} />,
    // todo change navigation to /direct/inbox/ instead
    path: '/',
  };

  return <NavButton item={messagesItem} />;
}

function NavButton({ item }: { item: SidebarNavItem }) {
  const { isSelected, onPress } = useNavButton(item);

  return SidebarItemButton({
    sidebarItem: item,
    isSelected: isSelected,
    onPress: onPress,
  });
}

function useNavButton(item: SidebarNavItem) {
  const ids = useSidebarSelectedItemsStateContext();
  const setIds = useSidebarSelectedItemsUpdaterContext();
  const router = useRouter();

  const isSelected = ids.includes(item.id);

  function onPress() {
    setIds([item.id]);
    router.navigate(item.path);
  }
  return { isSelected, onPress };
}

export { ExploreButton, HomeButton, MessagesButton, ReelsButton };
