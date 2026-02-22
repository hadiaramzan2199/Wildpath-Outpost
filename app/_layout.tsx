import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack, usePathname, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Platform, Pressable, StyleSheet, View, Text } from 'react-native';
import 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { LibraryProvider } from '@/context/LibraryContext';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const pathname = usePathname();
  const hideTabsOn = new Set(['/slide1', '/slide2', '/slide3']);
  const showTabs = !hideTabsOn.has(pathname);

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <LibraryProvider>
        <View style={[styles.root, Platform.OS === 'web' && styles.webRoot]}>
          <View style={styles.phone}>
            <View style={styles.frame}>
              <Stack
                screenOptions={{
                  headerShown: true,
                  headerTitleAlign: 'center',
                  headerStyle: { backgroundColor: '#E8DED2' },
                  headerShadowVisible: false,
                  headerTintColor: '#111',
                }}>
                <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen name="home" options={{ headerShown: false }} />
                <Stack.Screen name="camera" options={{ title: 'Camera' }} />
                <Stack.Screen name="full-screen" options={{ title: 'Preview' }} />
                <Stack.Screen name="library" options={{ title: 'Library' }} />
                <Stack.Screen name="send" options={{ title: 'Send' }} />
              </Stack>
              {showTabs ? <BottomNav currentPath={pathname} /> : null}
            </View>
          </View>
        </View>
        <StatusBar style="auto" />
      </LibraryProvider>
    </ThemeProvider>
  );
}

function BottomNav({ currentPath }: { currentPath: string }) {
  const active = (p: string) => currentPath.startsWith(p);
  return (
    <View style={styles.tabbar}>
      <Pressable style={styles.tabItem} onPress={() => router.push('/home' as const)}>
        <Ionicons name={active('/home') ? 'home' : 'home-outline'} size={22} color={active('/home') ? '#F36F21' : '#111'} />
        <Text style={[styles.tabLabel, active('/home') && styles.tabLabelActive]}>Home</Text>
      </Pressable>
      <Pressable style={styles.tabItem} onPress={() => router.push('/library' as const)}>
        <Ionicons name={active('/library') ? 'images' : 'images-outline'} size={22} color={active('/library') ? '#F36F21' : '#111'} />
        <Text style={[styles.tabLabel, active('/library') && styles.tabLabelActive]}>Library</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8DED2',
  },
  webRoot: {
    minHeight: '100vh' as never,
  },
  phone: {
    width: '100%',
    maxWidth: 420,
    marginVertical: 24,
    borderRadius: 28,
    aspectRatio: 390 / 844,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
    overflow: 'hidden',
    backgroundColor: '#1110',
  },
  frame: {
    flex: 1,
    width: '100%',
    backgroundColor: '#E8DED2',
  },
  tabbar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 64,
    backgroundColor: '#E8DED2',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(0,0,0,0.06)',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    paddingHorizontal: 8,
  },
  tabLabel: {
    fontSize: 12,
    color: '#111',
    opacity: 0.7,
    fontWeight: '600',
  },
  tabLabelActive: {
    color: '#F36F21',
    opacity: 1,
  },
});
