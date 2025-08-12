import { Image } from 'react-native';

import { usePathname, useRouter } from 'expo-router';

import OuterBorder from '@/src/components/OuterBorder';
import {
  SIDEBAR_ITEM_ID,
  useSidebarSelectedItemsUpdaterContext,
} from '@/src/context/SidebarSelectedItemsContext';
import { useThemeContext } from '@/src/context/ThemeContext';
import { BORDER_RADIUS } from '@/src/utils/theme';
import { SidebarNavItem } from '../Sidebar.types';
import { SidebarButton } from './SidebarButton';

export function ProfileButton({ size }: { size: number }) {
  const profileItem: SidebarNavItem = {
    id: SIDEBAR_ITEM_ID.PROFILE,
    label: 'Profil',
    icon: <ProfileIcon size={size} />,
    selectedIcon: <SelectedProfileIcon size={size} />,
    // todo change navigation to /[username]/ instead
    path: '/',
  };

  const { isSelected, onPress } = useProfileButton(profileItem);

  return SidebarButton({
    sidebarItem: profileItem,
    isSelected: isSelected,
    onPress: onPress,
  });
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
    <OuterBorder
      contentWidth={size}
      contentHeight={size}
      borderWidth={2}
      borderStyle={borderStyle}
    >
      <ProfileIcon size={size} />
    </OuterBorder>
  );
}

function ProfileIcon({ size }: { size: number }) {
  const style = {
    width: size,
    height: size,
    borderRadius: BORDER_RADIUS.round,
  };

  return (
    <Image
      style={style}
      source={require('@/src/assets/images/user_image.jpg')}
    />
  );
}
