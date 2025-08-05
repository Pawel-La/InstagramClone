import { Stack } from 'expo-router';
import { SelectedSideBarItemIdProvider } from '../context/SelectedSideBarItemIdContext';
import { ThemeProvider } from '../context/ThemeContext';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <SelectedSideBarItemIdProvider>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </SelectedSideBarItemIdProvider>
    </ThemeProvider>
  );
}
