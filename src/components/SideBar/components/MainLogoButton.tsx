import { Pressable, StyleSheet } from 'react-native';

import { useRouter } from 'expo-router';

import ThemedCustomIcon from '@/src/components/ThemedCustomIcon';
import ThemedView from '@/src/components/ThemedView';
import { useSidebarSelectedItemsUpdaterContext } from '@/src/context/SidebarSelectedItemsContext';
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
      <Pressable onPress={onPress}>
        {({ pressed }) => (
          <ThemedCustomIcon
            name="instagram-written"
            width={width}
            height={height}
            primaryColor={pressed ? theme.secondary : theme.primary}
          />
        )}
      </Pressable>
    </ThemedView>
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

const styles = StyleSheet.create({
  container: {
    paddingTop: SPACING.xxxl,
    paddingBottom: SPACING.sm,
    paddingHorizontal: SPACING.md,
    marginBottom: SPACING.xl,
  },
});
