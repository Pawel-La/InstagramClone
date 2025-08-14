import { StrictMode } from 'react';

import { Stack } from 'expo-router';

import Sidebar from '../components/Sidebar';
import ThemedView from '../components/ThemedView';
import { ThemeProvider } from '../context/ThemeContext';
import { styles } from './styles';

export default function RootLayout() {
  return (
    <StrictMode>
      <ThemeProvider>
        <ThemedView style={styles.container}>
          <Sidebar />

          <Stack
            screenOptions={{
              headerShown: false,
            }}
          />
        </ThemedView>
      </ThemeProvider>
    </StrictMode>
  );
}
