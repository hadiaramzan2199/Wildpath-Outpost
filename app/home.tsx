import { ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <Text style={styles.brandText}>OutPost</Text>
        <View style={styles.topIcons}>
          <Pressable hitSlop={10}>
            <Ionicons name="search-outline" size={20} color="#111" />
          </Pressable>
          <Pressable hitSlop={10} style={{ marginLeft: 14 }}>
            <Ionicons name="notifications-outline" size={20} color="#111" />
          </Pressable>
          <Pressable hitSlop={10} style={{ marginLeft: 14 }}>
            <Ionicons name="menu-outline" size={22} color="#111" />
          </Pressable>
        </View>
      </View>
      <View style={styles.tabsBar}>
        <Pressable style={[styles.tabItem, styles.tabActive]} onPress={() => router.push('/home' as const)}>
          <Ionicons name="home" size={16} color="#fff" />
          <Text style={styles.tabTextActive}>OutPosts</Text>
        </Pressable>
        <Pressable style={styles.tabItem} onPress={() => router.push('/playlists' as never)}>
          <Ionicons name="list-outline" size={16} color="#fff" />
          <Text style={styles.tabText}>Playlists</Text>
        </Pressable>
        <Pressable style={styles.tabItem} onPress={() => router.push('/library' as const)}>
          <Ionicons name="images-outline" size={16} color="#fff" />
          <Text style={styles.tabText}>Content</Text>
        </Pressable>
        <Pressable style={styles.tabItem} onPress={() => router.push('/connect' as never)}>
          <Ionicons name="link-outline" size={16} color="#fff" />
          <Text style={styles.tabText}>Connect</Text>
        </Pressable>
      </View>
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2128&auto=format&fit=crop' }}
        style={styles.heroCard}
        resizeMode="cover"
        imageStyle={styles.heroImage}>
        <View style={styles.heroOverlay} />
        <View style={styles.heroContent}>
          <Text style={styles.heroTitle}>OutPost</Text>
          <Text style={styles.heroSubtitle}>Create and send your advertisement</Text>
        </View>
      </ImageBackground>
      <TouchableOpacity style={styles.primary} activeOpacity={0.85} onPress={() => router.push('/camera' as const)}>
        <Text style={styles.primaryText}>Create Advertisement</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.secondary} activeOpacity={0.85} onPress={() => router.push('/library' as const)}>
        <Text style={styles.secondaryText}>Open Library</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8DED2',
    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 88,
    justifyContent: 'flex-start',
  },
  topbar: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
  },
  brandText: { fontSize: 18, fontWeight: '800', color: '#111' },
  topIcons: { flexDirection: 'row', alignItems: 'center' },
  tabsBar: {
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F36F21',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  tabItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 28,
    borderRadius: 14,
  },
  tabActive: {
    backgroundColor: 'rgba(255,255,255,0.18)',
  },
  tabText: { marginLeft: 6, color: '#fff', fontSize: 12, fontWeight: '600', opacity: 0.9 },
  tabTextActive: { marginLeft: 6, color: '#fff', fontSize: 12, fontWeight: '700' },
  heroCard: {
    width: '100%',
    aspectRatio: 16 / 9,
    borderRadius: 18,
    overflow: 'hidden',
    marginTop: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  heroImage: {
    borderRadius: 18,
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  heroContent: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 16,
  },
  heroTitle: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '800',
  },
  heroSubtitle: {
    color: '#fff',
    fontSize: 14,
    marginTop: 4,
    opacity: 0.9,
  },
  primary: {
    height: 52,
    borderRadius: 26,
    backgroundColor: '#F36F21',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  primaryText: { fontSize: 16, fontWeight: '600', color: '#fff' },
  secondary: {
    marginTop: 12,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  secondaryText: { fontSize: 16, fontWeight: '600', color: '#111' },
});
