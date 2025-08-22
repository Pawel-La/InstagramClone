import ThemedText from '@/src/components/ThemedText';
import ThemedView from '@/src/components/ThemedView';
import { useThemeContext } from '@/src/context/ThemeContext';
import { User } from '@/src/types/User';
import { FONT_SIZE, FONT_WEIGHT } from '@/src/utils/theme';

import UserRow from '../UserRow';
import styles from './styles';

export function ProposedUsersList({ users }: { users: User[] }) {
  return (
    <ThemedView>
      <ProposedUsersTextRow />

      <ThemedView style={styles.list}>
        {users.map((user) => (
          <ProposedUserRow key={user.id} user={user} />
        ))}
      </ThemedView>
    </ThemedView>
  );
}

function ProposedUsersTextRow() {
  const { theme: theme } = useThemeContext();
  const textRowStyles = {
    title: {
      color: theme.secondary,
      fontWeight: FONT_WEIGHT.medium,
    },
    link: {
      fontSize: FONT_SIZE.small,
      fontWeight: FONT_WEIGHT.medium,
    },
  };

  return (
    <ThemedView style={styles.textRow}>
      <ThemedText style={textRowStyles.title}>Propozycje dla Ciebie</ThemedText>
      <ThemedText style={textRowStyles.link}>Zobacz wszystkich</ThemedText>
    </ThemedView>
  );
}

function ProposedUserRow({ user }: { user: User }) {
  return (
    <UserRow.Container>
      <UserRow.Icon source={user.icon} />

      <UserRow.TextsContainer>
        <UserRow.Text text={user.nickName} />
        <UserRow.SubText text={'Propozycje dla Ciebie'} style={styles.userRow} />
      </UserRow.TextsContainer>

      <UserRow.LinkText text={'Obserwuj'} />
    </UserRow.Container>
  );
}
