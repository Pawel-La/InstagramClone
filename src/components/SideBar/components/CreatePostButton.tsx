import ThemedCustomIcon from '@/src/components/ThemedCustomIcon';

import { SidebarItem } from '../Sidebar.types';
import { SidebarItemButton } from './SidebarItemButton';

export function CreatePostButton({ iconSize }: { iconSize: number }) {
  const createPostItem: SidebarItem = {
    id: 'CREATE',
    label: 'Utwórz',
    icon: <ThemedCustomIcon name="add-box" size={iconSize} />,
    selectedIcon: <ThemedCustomIcon name="add-box" size={iconSize} />,
  };

  function onPress() {
    // todo add opening of modal
  }

  return <SidebarItemButton sidebarItem={createPostItem} isSelected={false} onPress={onPress} />;
}
