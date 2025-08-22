import { Pressable, PressableProps } from 'react-native';

import ThemedText from '@/src/components/ThemedText';
import ThemedView from '@/src/components/ThemedView';
import { useThemeContext } from '@/src/context/ThemeContext';

import { Variant } from '../../FeedSection.hooks';

import styles from './styles';

type TopBarProps = {
  variant: Variant;
  showHome: () => void;
  showFollowing: () => void;
};

export default function TopBar({ variant, showHome, showFollowing }: TopBarProps) {
  return (
    <ThemedView style={styles.container}>
      <TopBarButton text={'Dla Ciebie'} selected={variant === 'HOME'} onPress={showHome} />
      <TopBarButton
        text={'Obserwowani'}
        selected={variant === 'FOLLOWING'}
        onPress={showFollowing}
      />
    </ThemedView>
  );
}

type TopBarButtonProps = {
  text: string;
  selected: boolean;
  onPress: PressableProps['onPress'];
};

function TopBarButton({ text, selected, onPress }: TopBarButtonProps) {
  const { theme: theme } = useThemeContext();
  const style = [styles.text, { color: selected ? theme.primary : theme.secondary }];

  return (
    <Pressable onPress={onPress}>
      <ThemedText style={style}>{text}</ThemedText>
    </Pressable>
  );
}
