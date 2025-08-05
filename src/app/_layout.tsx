import { Stack } from 'expo-router';

import SideBar from '../components/SideBar';
import ThemedView from '../components/ThemedView';
import { SelectedSideBarItemIdProvider } from '../context/SelectedSideBarItemIdContext';
import { ThemeProvider } from '../context/ThemeContext';
import { styles } from './styles';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <SelectedSideBarItemIdProvider>
        <ThemedView style={styles.container}>
          <SideBar />
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          />
        </ThemedView>
      </SelectedSideBarItemIdProvider>
    </ThemeProvider>
  );
}
