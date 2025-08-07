import { Stack } from 'expo-router';

import SideBar from '../components/SideBar';
import ThemedView from '../components/ThemedView';
import { SideBarSelectedItemsProvider } from '../context/SideBarSelectedItemsContext';
import { ThemeProvider } from '../context/ThemeContext';
import { styles } from './styles';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <ThemedView style={styles.container}>
        <SideBarSelectedItemsProvider>
          <SideBar />
        </SideBarSelectedItemsProvider>

        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </ThemedView>
    </ThemeProvider>
  );
}
