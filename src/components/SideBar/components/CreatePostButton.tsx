import ThemedCustomIcon from '@/src/components/ThemedCustomIcon';
import { SidebarItem } from '../Sidebar.types';
import { SidebarButton } from './SidebarButton';

export function CreatePostButton({ size }: { size: number }) {
  const createPostItem: SidebarItem = {
    id: 'CREATE',
    label: 'Utwórz',
    icon: <ThemedCustomIcon name="add-box" size={size} />,
    selectedIcon: <ThemedCustomIcon name="add-box" size={size} />,
  };

  function onPress() {
    // todo add opening of modal
  }

  return (
    <SidebarButton
      sidebarItem={createPostItem}
      isSelected={false}
      onPress={onPress}
    />
  );
}
