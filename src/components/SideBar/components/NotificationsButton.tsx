import React from 'react';

import ThemedCustomIcon from '@/src/components/ThemedCustomIcon';
import {
  SIDEBAR_ITEM_ID,
  useSidebarSelectedItemsStateContext,
  useSidebarSelectedItemsUpdaterContext,
} from '@/src/context/SidebarSelectedItemsContext';
import { SidebarItem } from '../Sidebar.types';
import { SidebarButton } from './SidebarButton';

export function NotificationsButton({ size }: { size: number }) {
  const notificationsItem: SidebarItem = {
    id: SIDEBAR_ITEM_ID.NOTIFICATIONS,
    label: 'Powiadomienia',
    icon: <ThemedCustomIcon name="heart_empty" size={size} />,
    selectedIcon: <ThemedCustomIcon name="heart_filled" size={size} />,
  };

  const { isSelected, onPress } = useNotificationsButton(notificationsItem);

  return SidebarButton({
    sidebarItem: notificationsItem,
    isSelected: isSelected,
    onPress: onPress,
  });
}

function useNotificationsButton(notificationsItem: SidebarItem) {
  const ids = useSidebarSelectedItemsStateContext();
  const setIds = useSidebarSelectedItemsUpdaterContext();

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

  return { isSelected, onPress };
}
