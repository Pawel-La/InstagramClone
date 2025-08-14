import { Pressable, StyleSheet } from 'react-native';

import { useRouter } from 'expo-router';

import ThemedCustomIcon from '@/src/components/ThemedCustomIcon';
import ThemedView from '@/src/components/ThemedView';
import { useSidebarSelectedItemsUpdaterContext } from '@/src/context/SidebarSelectedItemsContext';
import { useSidebarVersionContext } from '@/src/context/SidebarVersionContext';
import { useThemeContext } from '@/src/context/ThemeContext';
import { SPACING } from '@/src/utils/theme';
import { SidebarItem } from '../Sidebar.types';
import { SidebarItemButton } from './SidebarItemButton';

const BIG_SCREEN_MAIN_LOGO_BUTTON_WIDTH = 100 as const;
const BIG_SCREEN_MAIN_LOGO_BUTTON_HEIGHT = 32 as const;

export function MainLogoButton({
  smallScreenIconSize,
}: {
  smallScreenIconSize: number;
}) {
  const sidebarVersion = useSidebarVersionContext();
  const onPress = useMainLogoButton();

  if (sidebarVersion === 'LG') {
    return <LargeMainLogoButton onPress={onPress} />;
  }

  return (
    <SmallMainLogoButton onPress={onPress} iconSize={smallScreenIconSize} />
  );
}

function useMainLogoButton() {
  const setIds = useSidebarSelectedItemsUpdaterContext();
  const router = useRouter();

  const onPress = () => {
    setIds(['HOME']);
    router.navigate('/');
  };

  return onPress;
}

function LargeMainLogoButton({ onPress }: { onPress(): void }) {
  const { theme: theme } = useThemeContext();

  return (
    <ThemedView style={styles.largeButtonContainer}>
      <Pressable onPress={onPress}>
        {({ pressed }) => (
          <ThemedCustomIcon
            name="instagram-written"
            width={BIG_SCREEN_MAIN_LOGO_BUTTON_WIDTH}
            height={BIG_SCREEN_MAIN_LOGO_BUTTON_HEIGHT}
            primaryColor={pressed ? theme.secondary : theme.primary}
          />
        )}
      </Pressable>
    </ThemedView>
  );
}

function SmallMainLogoButton({
  iconSize,
  onPress,
}: {
  iconSize: number;
  onPress(): void;
}) {
  const mainLogoItem: SidebarItem = {
    id: 'INSTAGRAM',
    label: '',
    icon: <ThemedCustomIcon name="instagram-icon" size={iconSize} />,
    selectedIcon: <ThemedCustomIcon name="instagram-icon" size={iconSize} />,
  };

  return (
    <ThemedView style={styles.smallButtonContainer}>
      <SidebarItemButton
        sidebarItem={mainLogoItem}
        isSelected={false}
        onPress={onPress}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  largeButtonContainer: {
    paddingTop: SPACING.xxxl,
    paddingBottom: SPACING.sm,
    paddingHorizontal: SPACING.md,
    marginBottom: SPACING.xl,
  },
  smallButtonContainer: { paddingTop: SPACING.xl, marginBottom: 18 },
});
