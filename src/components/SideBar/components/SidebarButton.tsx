import {
  PressableProps,
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

import CustomButton from '@/src/components/CustomButton';
import ThemedText from '@/src/components/ThemedText';
import { useThemeContext } from '@/src/context/ThemeContext';
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
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

function SidebarButtonStyled({
  icon,
  text,
  onPress,
  containerStyle,
  textStyle,
}: SidebarButtonStyledProps) {
  const { theme: theme } = useThemeContext();

  return (
    <CustomButton
      onPress={onPress}
      renderContent={({ isPressed, isHovered }) => (
        <View
          style={[
            styles.container,
            {
              backgroundColor: isHovered
                ? theme.background_hovered
                : theme.background,
              transform: [{ scale: isPressed ? 0.96 : 1 }],
            },
            containerStyle,
          ]}
        >
          {icon}
          <ThemedText style={[styles.text, textStyle]}>{text}</ThemedText>
        </View>
      )}
    />
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
