import ThemedCustomIcon from '@/src/components/ThemedCustomIcon';
import {
  SIDEBAR_ITEM_ID,
  useSidebarSelectedItemsStateContext,
  useSidebarSelectedItemsUpdaterContext,
} from '@/src/context/SidebarSelectedItemsContext';
import { SidebarItem } from '../Sidebar.types';
import { SidebarButton } from './SidebarButton';

export function MoreButton({ size }: { size: number }) {
  const moreButton: SidebarItem = {
    id: SIDEBAR_ITEM_ID.MORE,
    label: 'Więcej',
    icon: <ThreeHorizontalLinesIcon strokeWidth={2} size={size} />,
    selectedIcon: <ThreeHorizontalLinesIcon strokeWidth={3} size={size} />,
  };

  const { isSelected, onPress } = useMoreButton(moreButton);

  return SidebarButton({
    sidebarItem: moreButton,
    isSelected: isSelected,
    onPress: onPress,
  });
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

function ThreeHorizontalLinesIcon({
  strokeWidth,
  size,
}: {
  strokeWidth: number;
  size: number;
}) {
  return (
    <ThemedCustomIcon
      name="three-horizontal-lines"
      size={size}
      strokeWidth={strokeWidth}
    />
  );
}
