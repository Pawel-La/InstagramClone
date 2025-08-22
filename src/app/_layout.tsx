import { StrictMode } from 'react';

import { Stack } from 'expo-router';

import { styles } from './styles';
import Sidebar from '../components/Sidebar';
import ThemedView from '../components/ThemedView';
import { ThemeProvider } from '../context/ThemeContext';

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
