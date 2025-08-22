import React from 'react';

import ThemedCustomIcon from '@/src/components/ThemedCustomIcon';
import {
  useSidebarSelectedItemsStateContext,
  useSidebarSelectedItemsUpdaterContext,
} from '@/src/context/SideBarSelectedItemsContext';

import { SidebarItem } from '../Sidebar.types';
import { SidebarItemButton } from './SidebarItemButton';

export function NotificationsButton({ iconSize }: { iconSize: number }) {
  const notificationsItem: SidebarItem = {
    id: 'NOTIFICATIONS',
    label: 'Powiadomienia',
    icon: <ThemedCustomIcon name="heart_empty" size={iconSize} />,
    selectedIcon: <ThemedCustomIcon name="heart_filled" size={iconSize} />,
  };

  const { isSelected, onPress } = useNotificationsButton(notificationsItem);

  return (
    <SidebarItemButton sidebarItem={notificationsItem} isSelected={isSelected} onPress={onPress} />
  );
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
