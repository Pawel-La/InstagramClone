import CustomButton from '@/src/components/CustomButton';
import ThemedText from '@/src/components/ThemedText';
import ThemedView from '@/src/components/ThemedView';
import { useThemeContext } from '@/src/context/ThemeContext';
import { PressableProps } from 'react-native';
import { Variant } from './FeedSection.hooks';
import styles from './styles';

type TopBarProps = {
  variant: Variant;
  showHome: () => void;
  showFollowing: () => void;
};

export default function TopBar({
  variant,
  showHome,
  showFollowing,
}: TopBarProps) {
  return (
    <ThemedView style={styles.topBar}>
      <TopBarButton
        text={'Dla Ciebie'}
        selected={variant === 'HOME'}
        onPress={showHome}
      />
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
  const color = selected ? theme.primary : theme.secondary;

  return (
    <CustomButton
      onPress={onPress}
      renderContent={() => (
        <ThemedText style={[styles.topBarText, { color: color }]}>
          {text}
        </ThemedText>
      )}
    />
  );
}
