import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';

export default function Slide3() {
  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?q=80&w=810&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
      style={styles.bg}
      resizeMode="cover">
      <View style={styles.overlay} />
      <View style={styles.content}>
        <Text style={styles.title}>Manage & Share</Text>
        <Text style={styles.subtitle}>Save content and send when ready</Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.link} onPress={() => router.replace('/home' as const)}>
            <Text style={styles.linkText}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.primary} onPress={() => router.replace('/home' as const)}>
            <Text style={styles.primaryText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1 },
  overlay: {
    ...StyleSheet.absoluteFillObject as {},
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-end',
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 6,
  },
  subtitle: {
    color: '#fff',
    opacity: 0.9,
    fontSize: 16,
    marginBottom: 20,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  link: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  linkText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  primary: {
    height: 48,
    borderRadius: 24,
    paddingHorizontal: 24,
    backgroundColor: '#F36F21',
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
