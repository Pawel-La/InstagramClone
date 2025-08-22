import { Href } from 'expo-router';

import { SidebarItemId } from '@/src/context/SideBarSelectedItemsContext';

export type SidebarItem = {
  id: SidebarItemId;
  label: string;
  icon: React.ReactElement;
  selectedIcon: React.ReactElement;
};

export interface SidebarNavItem extends SidebarItem {
  path: Href;
}
