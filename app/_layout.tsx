import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Slot, Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useContext, useEffect } from 'react';
import 'react-native-reanimated';
import '../styles/global.css';

import { useColorScheme } from '@/components/useColorScheme';
import AuthContext from '@/context/AuthContext';
import AuthProvider from './AuthProvider';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });
  const { isAuthenticated } = useContext(AuthContext);

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    <AuthProvider>
      {isAuthenticated ? <RootLayoutNav /> : <Slot />}
    </AuthProvider>
  </ThemeProvider>;
}

function RootLayoutNav() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(routes)/sign-in/index" />
        <Stack.Screen name="(routes)/sign-up/index" />
    </Stack>
  );
}
