import ThemedView from '@/src/components/ThemedView';
import { getLoggedInUser, getRandomUsers } from '@/src/types/User';

import styles from './styles';

import { BottomText } from './BottomText';
import { ProposedUsersList } from './ProposedUsersList';
import { UserRow } from './UserRow';

const loggedInUser = getLoggedInUser();
const proposedUsers = getRandomUsers(5);

export default function RightSection() {
  return (
    <ThemedView style={styles.container}>
      <UserRow user={loggedInUser} />

      <ProposedUsersList users={proposedUsers} />

      <BottomText />
    </ThemedView>
  );
}
