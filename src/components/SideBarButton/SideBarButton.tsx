import {
  PressableProps,
  StyleProp,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

import { useThemeContext } from '@/src/context/ThemeContext';
import CustomButton from '../CustomButton';
import ThemedText from '../ThemedText';
import styles from './styles';

type SideBarButtonProps = {
  icon: React.ReactElement;
  text: string;
  onPress?: PressableProps['onPress'];
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export function SideBarButton({
  icon,
  text,
  onPress,
  containerStyle,
  textStyle,
}: SideBarButtonProps) {
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
