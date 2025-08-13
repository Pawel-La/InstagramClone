import { Pressable, StyleSheet, View } from 'react-native';

import ThemedText from '@/src/components/ThemedText';
import { ThemeProps, useThemeContext } from '@/src/context/ThemeContext';
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
  const styles = createStyles(theme, isHovered);

  return (
    <Pressable onPress={onPress}>
      {({ pressed }) => (
        <View
          style={[
            styles.container,
            { transform: [{ scale: pressed ? 0.96 : 1 }] },
          ]}
          ref={ref}
        >
          {isSelected ? sidebarItem.selectedIcon : sidebarItem.icon}

          <ThemedText
            style={[
              styles.text,
              isSelected && { fontWeight: FONT_WEIGHT.bold },
            ]}
          >
            {sidebarItem.label}
          </ThemedText>
        </View>
      )}
    </Pressable>
  );
}

function createStyles(theme: ThemeProps, isHovered: boolean) {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      padding: SPACING.md,
      marginVertical: SPACING.xxs,
      gap: SPACING.lg,
      borderRadius: BORDER_RADIUS.md,
      backgroundColor: isHovered ? theme.background_hovered : theme.background,
    },
    text: {
      fontSize: FONT_SIZE.md,
      lineHeight: LINE_HEIGHT.lg,
    },
  });

  return styles;
}
