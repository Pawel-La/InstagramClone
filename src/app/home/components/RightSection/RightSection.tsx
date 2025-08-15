import ThemedView from '@/src/components/ThemedView';
import { getMockLoggedInUser, getMockUsers } from '@/src/types/User';

import styles from './styles';

import BottomText from './components/BottomText';
import ProposedUsersList from './components/ProposedUsersList';
import UserRow from './components/UserRow';

const loggedInUser = getMockLoggedInUser();
const proposedUsers = getMockUsers(5);

export default function RightSection() {
  return (
    <ThemedView style={styles.container}>
      <UserRow user={loggedInUser} />

      <ProposedUsersList users={proposedUsers} />

      <BottomText />
    </ThemedView>
  );
}
