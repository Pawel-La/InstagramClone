import { PropsWithChildren } from 'react';
import { ImageSourcePropType, TextStyle } from 'react-native';

import ProfileIcon from '@/src/components/ProfileIcon';
import ThemedText from '@/src/components/ThemedText';
import ThemedView from '@/src/components/ThemedView';
import { useThemeContext } from '@/src/context/ThemeContext';
import { User } from '@/src/types/User';
import { FONT_SIZE } from '@/src/utils/theme';

import styles from './styles';

export function UserRow({ user }: { user: User }) {
  return (
    <UserRow.Container>
      <UserRow.Icon source={user.icon} />

      <UserRow.TextsContainer>
        <UserRow.Text text={user.nickName} />
        <UserRow.SubText text={user.name} />
      </UserRow.TextsContainer>

      <UserRow.LinkText text={'Przełącz'} />
    </UserRow.Container>
  );
}

function Container({ children }: PropsWithChildren) {
  return <ThemedView style={styles.container}>{children}</ThemedView>;
}
UserRow.Container = Container;

function Icon({ source }: { source: ImageSourcePropType }) {
  return <ProfileIcon size={44} source={source} />;
}
UserRow.Icon = Icon;

function TextsContainer({ children }: PropsWithChildren) {
  return <ThemedView style={styles.textsContainer}>{children}</ThemedView>;
}
UserRow.TextsContainer = TextsContainer;

function Text({ text }: { text: string }) {
  return <ThemedText style={styles.text}>{text}</ThemedText>;
}
UserRow.Text = Text;

function SubText({ text, style }: { text: string; style?: TextStyle }) {
  const { theme: theme } = useThemeContext();
  const subTextStyle = [{ color: theme.secondary }, style];

  return <ThemedText style={subTextStyle}>{text}</ThemedText>;
}
UserRow.SubText = SubText;

function LinkText({ text }: { text: string }) {
  const { theme: theme } = useThemeContext();
  const style = { color: theme.link_primary, fontSize: FONT_SIZE.small };

  return <ThemedText style={style}>{text}</ThemedText>;
}
UserRow.LinkText = LinkText;
