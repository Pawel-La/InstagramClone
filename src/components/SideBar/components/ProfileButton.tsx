import { usePathname, useRouter } from 'expo-router';

import OuterBorder from '@/src/components/OuterBorder';
import ProfileIcon from '@/src/components/ProfileIcon';
import { useSidebarSelectedItemsUpdaterContext } from '@/src/context/SideBarSelectedItemsContext';
import { useThemeContext } from '@/src/context/ThemeContext';
import { BORDER_RADIUS } from '@/src/utils/theme';

import { SidebarNavItem } from '../Sidebar.types';
import { SidebarItemButton } from './SidebarItemButton';

const defaultUserImage = require('@/src/assets/images/user_image.jpg');

export function ProfileButton({ iconSize }: { iconSize: number }) {
  const profileItem: SidebarNavItem = {
    id: 'PROFILE',
    label: 'Profil',
    icon: <ProfileIcon size={iconSize} source={defaultUserImage} />,
    selectedIcon: <SelectedProfileIcon size={iconSize} />,
    // todo change navigation to /[username]/ instead
    path: '/',
  };

  const { isSelected, onPress } = useProfileButton(profileItem);

  return <SidebarItemButton sidebarItem={profileItem} isSelected={isSelected} onPress={onPress} />;
}

function useProfileButton(profileItem: SidebarNavItem) {
  const setIds = useSidebarSelectedItemsUpdaterContext();
  const router = useRouter();
  const pathname = usePathname();

  const isSelected = pathname === profileItem.path;

  function onPress() {
    setIds([profileItem.id]);
    router.navigate(profileItem.path);
  }

  return { isSelected, onPress };
}

function SelectedProfileIcon({ size }: { size: number }) {
  const { theme: theme } = useThemeContext();

  const borderStyle = {
    borderColor: theme.primary,
    borderRadius: BORDER_RADIUS.round,
  };

  return (
    <OuterBorder contentWidth={size} contentHeight={size} borderWidth={2} borderStyle={borderStyle}>
      <ProfileIcon size={size} source={defaultUserImage} />
    </OuterBorder>
  );
}
