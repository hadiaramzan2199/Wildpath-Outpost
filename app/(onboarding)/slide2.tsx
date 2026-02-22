import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';

export default function Slide2() {
  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2128&auto=format&fit=crop' }}
      style={styles.bg}
      resizeMode="cover">
      <View style={styles.overlay} />
      <View style={styles.content}>
        <Text style={styles.title}>Collect Data from Outposts</Text>
        <Text style={styles.subtitle}>Connect to cameras and sources</Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.link} onPress={() => router.replace('/home' as const)}>
            <Text style={styles.linkText}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.primary} onPress={() => router.push('/(onboarding)/slide3' as never)}>
            <Text style={styles.primaryText}>Next</Text>
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
