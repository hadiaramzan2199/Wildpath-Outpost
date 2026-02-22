import { StyleSheet, Text, View } from 'react-native';

export default function Playlists() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Playlists</Text>
      <Text style={styles.subtitle}>Coming soon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8DED2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: { fontSize: 22, fontWeight: '700', color: '#111' },
  subtitle: { marginTop: 6, color: '#333' },
});
