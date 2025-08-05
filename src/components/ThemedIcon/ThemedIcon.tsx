import { useThemeContext } from '@/src/context/ThemeContext';
import { MaterialIcons } from '@expo/vector-icons';
import type { ComponentProps } from 'react';

type ThemedIconProps = ComponentProps<typeof MaterialIcons>;

const ThemedIcon = ({ color, ...props }: ThemedIconProps) => {
  const { theme: theme } = useThemeContext();
  const iconColor = color ?? theme.text;

  return <MaterialIcons color={iconColor} {...props} />;
};

export default ThemedIcon;
