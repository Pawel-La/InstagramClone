import ThemedCustomIcon from '@/src/components/ThemedCustomIcon';
import {
  useSidebarSelectedItemsStateContext,
  useSidebarSelectedItemsUpdaterContext,
} from '@/src/context/SideBarSelectedItemsContext';

import { SidebarItem } from '../Sidebar.types';
import { SidebarItemButton } from './SidebarItemButton';

export function MoreButton({ iconSize }: { iconSize: number }) {
  const moreButton: SidebarItem = {
    id: 'MORE',
    label: 'Więcej',
    icon: <ThreeHorizontalLinesIcon strokeWidth={2} size={iconSize} />,
    selectedIcon: <ThreeHorizontalLinesIcon strokeWidth={3} size={iconSize} />,
  };

  const { isSelected, onPress } = useMoreButton(moreButton);

  return <SidebarItemButton sidebarItem={moreButton} isSelected={isSelected} onPress={onPress} />;
}

function useMoreButton(moreButton: SidebarItem) {
  const ids = useSidebarSelectedItemsStateContext();
  const setIds = useSidebarSelectedItemsUpdaterContext();
  const isSelected = ids.includes(moreButton.id);

  function onPress() {
    setIds([...ids, moreButton.id]);
    // todo add modal
    // on modal close, deselect this button
  }

  return { isSelected, onPress };
}

function ThreeHorizontalLinesIcon({ strokeWidth, size }: { strokeWidth: number; size: number }) {
  return <ThemedCustomIcon name="three-horizontal-lines" size={size} strokeWidth={strokeWidth} />;
}
