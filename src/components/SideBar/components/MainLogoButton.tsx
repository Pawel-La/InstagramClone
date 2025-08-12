import { StyleSheet } from 'react-native';

import { useRouter } from 'expo-router';

import CustomButton from '@/src/components/CustomButton';
import ThemedCustomIcon from '@/src/components/ThemedCustomIcon';
import ThemedView from '@/src/components/ThemedView';
import {
  SIDEBAR_ITEM_ID,
  useSidebarSelectedItemsUpdaterContext,
} from '@/src/context/SidebarSelectedItemsContext';
import { useThemeContext } from '@/src/context/ThemeContext';
import { SPACING } from '@/src/utils/theme';

export function MainLogoButton({
  width,
  height,
}: {
  width: number;
  height: number;
}) {
  const onPress = useMainLogoButton();
  const { theme: theme } = useThemeContext();

  return (
    <ThemedView style={styles.container}>
      <CustomButton
        onPress={onPress}
        renderContent={({ isPressed }) => (
          <ThemedCustomIcon
            name="instagram-written"
            width={width}
            height={height}
            primaryColor={isPressed ? theme.secondary : theme.primary}
          />
        )}
      />
    </ThemedView>
  );
}

function useMainLogoButton() {
  const setIds = useSidebarSelectedItemsUpdaterContext();
  const router = useRouter();

  const onPress = () => {
    setIds([SIDEBAR_ITEM_ID.HOME]);
    router.navigate('/');
  };

  return onPress;
}

const styles = StyleSheet.create({
  container: {
    paddingTop: SPACING.xxxl,
    paddingBottom: SPACING.sm,
    paddingHorizontal: SPACING.md,
    marginBottom: SPACING.xl,
  },
});
