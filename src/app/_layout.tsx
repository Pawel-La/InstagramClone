import { Stack } from 'expo-router';

import Sidebar from '../components/Sidebar';
import ThemedView from '../components/ThemedView';
import { SidebarSelectedItemsProvider } from '../context/SidebarSelectedItemsContext';
import { ThemeProvider } from '../context/ThemeContext';
import { styles } from './styles';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <ThemedView style={styles.container}>
        <SidebarSelectedItemsProvider>
          <Sidebar />
        </SidebarSelectedItemsProvider>

        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </ThemedView>
    </ThemeProvider>
  );
}
