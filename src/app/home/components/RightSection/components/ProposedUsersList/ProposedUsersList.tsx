import { useMemo } from 'react';

import ThemedText from '@/src/components/ThemedText';
import ThemedView from '@/src/components/ThemedView';
import { useThemeContext } from '@/src/context/ThemeContext';
import { User } from '@/src/types/User';

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
  const dynamicStyles = useMemo(
    () => ({
      textRowTitle: {
        color: theme.secondary,
      },
    }),
    [theme.secondary],
  );

  return (
    <ThemedView style={styles.textRow}>
      <ThemedText style={[styles.textRowTitle, dynamicStyles.textRowTitle]}>
        Propozycje dla Ciebie
      </ThemedText>
      <ThemedText style={[styles.textRowLink]}>Zobacz wszystkich</ThemedText>
    </ThemedView>
  );
}

function ProposedUserRow({ user }: { user: User }) {
  return (
    <UserRow.Container>
      <UserRow.Icon source={user.profileImage} />

      <UserRow.TextsContainer>
        <UserRow.Text text={user.nickName} />
        <UserRow.SubText text={'Propozycje dla Ciebie'} style={styles.userRow} />
      </UserRow.TextsContainer>

      <UserRow.LinkText text={'Obserwuj'} />
    </UserRow.Container>
  );
}
