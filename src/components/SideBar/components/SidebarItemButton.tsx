import { Pressable, StyleSheet, View } from 'react-native';

import ThemedText from '@/src/components/ThemedText';
import { useThemeContext } from '@/src/context/ThemeContext';
import useHover from '@/src/hooks/useHover';
import {
  BORDER_RADIUS,
  FONT_SIZE,
  FONT_WEIGHT,
  LINE_HEIGHT,
  SPACING,
} from '@/src/utils/theme';
import { SidebarItem } from '../Sidebar.types';

type SidebarItemButtonProps = {
  sidebarItem: SidebarItem;
  isSelected: boolean;
  onPress: () => void;
};

export function SidebarItemButton({
  sidebarItem,
  isSelected,
  onPress,
}: SidebarItemButtonProps) {
  const { theme: theme } = useThemeContext();
  const { isHovered, ref } = useHover();

  return (
    <Pressable onPress={onPress} ref={ref}>
      {({ pressed }) => (
        <View
          style={[
            styles.container,
            {
              backgroundColor: isHovered
                ? theme.background_hovered
                : theme.background,
            },
            pressed && { transform: [{ scale: 0.96 }] },
          ]}
        >
          {isSelected ? sidebarItem.selectedIcon : sidebarItem.icon}

          <ThemedText style={[styles.text, isSelected && styles.selectedText]}>
            {sidebarItem.label}
          </ThemedText>
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: SPACING.md,
    marginVertical: SPACING.xxs,
    gap: SPACING.lg,
    borderRadius: BORDER_RADIUS.md,
  },
  text: {
    fontSize: FONT_SIZE.md,
    lineHeight: LINE_HEIGHT.lg,
  },
  selectedText: {
    fontWeight: FONT_WEIGHT.bold,
  },
});
