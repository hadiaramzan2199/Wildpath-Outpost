import { useCallback } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';

import { useImagePicker } from '@/hooks/useImagePicker';

const BG = '#E8DED2';

export default function CameraScreen() {
  const { pickFromCamera, pickFromLibrary } = useImagePicker();

  const goToPreview = useCallback((uri: string) => {
    try {
      router.push({ pathname: '/full-screen', params: { uri } });
    } catch {
      Alert.alert('Error', 'Unable to open preview.');
    }
  }, []);

  const handleTakePhoto = async () => {
    const uri = await pickFromCamera();
    if (uri) {
      goToPreview(uri);
    }
  };

  const handlePickFromLibrary = async () => {
    const uri = await pickFromLibrary();
    if (uri) {
      goToPreview(uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Advertisement</Text>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.secondaryButton} activeOpacity={0.85} onPress={handleTakePhoto}>
          <Text style={styles.secondaryButtonText}>Take Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton} activeOpacity={0.85} onPress={handlePickFromLibrary}>
          <Text style={styles.secondaryButtonText}>Upload from Library</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.noteWrap}>
        <Text style={styles.noteText}>After choosing an image, you will preview and save.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#111111',
    textAlign: 'center',
    marginBottom: 16,
  },
  actions: {
    marginTop: 8,
  },
  secondaryButton: {
    height: 52,
    borderRadius: 26,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111111',
  },
  noteWrap: {
    marginTop: 12,
    alignItems: 'center',
  },
  noteText: {
    fontSize: 12,
    color: '#333333',
    opacity: 0.7,
  },
});
