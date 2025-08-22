import ThemedCustomIcon from '@/src/components/ThemedCustomIcon';
import {
  useSidebarSelectedItemsStateContext,
  useSidebarSelectedItemsUpdaterContext,
} from '@/src/context/SideBarSelectedItemsContext';

import { SidebarItem } from '../Sidebar.types';
import { SidebarItemButton } from './SidebarItemButton';

export function SearchButton({ iconSize }: { iconSize: number }) {
  const searchItem: SidebarItem = {
    id: 'SEARCH',
    label: 'Szukaj',
    icon: <ThemedCustomIcon name="search" size={iconSize} strokeWidth={2} />,
    selectedIcon: <ThemedCustomIcon name="search" size={iconSize} strokeWidth={3} />,
  };

  const { isSelected, onPress } = useSearchButton(searchItem);

  return <SidebarItemButton sidebarItem={searchItem} isSelected={isSelected} onPress={onPress} />;
}

function useSearchButton(searchItem: SidebarItem) {
  const ids = useSidebarSelectedItemsStateContext();
  const setIds = useSidebarSelectedItemsUpdaterContext();

  const isSelected = ids.includes(searchItem.id);

  function onPress() {
    function deselectButton() {
      setIds(ids.filter((id) => id !== searchItem.id));
    }

    function onReelsOrMessagesPage() {
      return ids.length === 1 && (ids[0] === 'REELS' || ids[0] === 'MESSAGES');
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

  return { isSelected, onPress };
}
