import { SidebarItemId } from '@/src/context/SidebarSelectedItemsContext';
import { Href } from 'expo-router';

export type SidebarItem = {
  id: SidebarItemId;
  label: string;
  icon: React.ReactElement;
  selectedIcon: React.ReactElement;
};

export interface SidebarNavItem extends SidebarItem {
  path: Href;
}
