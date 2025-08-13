import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
} from 'react-native';

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

type SidebarButtonProps = {
  sidebarItem: SidebarItem;
  isSelected: boolean;
  onPress: () => void;
};

export function SidebarButton({
  sidebarItem,
  isSelected,
  onPress,
}: SidebarButtonProps) {
  return (
    <SidebarButtonStyled
      icon={isSelected ? sidebarItem.selectedIcon : sidebarItem.icon}
      text={sidebarItem.label}
      onPress={onPress}
      textStyle={isSelected ? styles.selectedButtonText : undefined}
    />
  );
}

type SidebarButtonStyledProps = {
  icon: React.ReactElement;
  text: string;
  onPress?: PressableProps['onPress'];
  textStyle?: StyleProp<TextStyle>;
};

function SidebarButtonStyled({
  icon,
  text,
  onPress,
  textStyle,
}: SidebarButtonStyledProps) {
  const { theme: theme } = useThemeContext();
  const { isHovered, ref } = useHover();

  return (
    <Pressable onPress={onPress}>
      {({ pressed }) => (
        <View
          style={[
            styles.container,
            {
              backgroundColor: isHovered
                ? theme.background_hovered
                : theme.background,
              transform: [{ scale: pressed ? 0.96 : 1 }],
            },
          ]}
          ref={ref}
        >
          {icon}
          <ThemedText style={[styles.text, textStyle]}>{text}</ThemedText>
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
  selectedButtonText: {
    fontWeight: FONT_WEIGHT.bold,
  },
});
