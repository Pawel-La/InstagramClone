import { Stack } from 'expo-router';

import SideBar from '../components/SideBar';
import ThemedView from '../components/ThemedView';
import { SideBarSelectedItemsProvider } from '../context/SideBarSelectedItemsContext';
import { ThemeProvider } from '../context/ThemeContext';
import { styles } from './styles';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <SideBarSelectedItemsProvider>
        <ThemedView style={styles.container}>
          <SideBar />
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          />
        </ThemedView>
      </SideBarSelectedItemsProvider>
    </ThemeProvider>
  );
}
