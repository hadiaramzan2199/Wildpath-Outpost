import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { useLibrary } from '@/context/LibraryContext';

export default function FullScreenTemplate() {
  const params = useLocalSearchParams<{ uri?: string }>();
  const imageUri = typeof params.uri === 'string' ? params.uri : undefined;
  const { addItem } = useLibrary();

  const hasImage = !!imageUri && imageUri.length > 0;

  const handleSave = () => {
    if (imageUri) {
      addItem(imageUri);
    }
    Alert.alert('Image stored in content library');
    router.push('/library' as const);
  };

  return (
    <View style={styles.container}>
      <View style={styles.canvasWrapper}>
        <View style={styles.canvas}>
          {hasImage ? (
            <Image
              source={{ uri: imageUri }}
              style={styles.canvasImage}
              resizeMode="cover"
            />
          ) : (
            <View style={styles.canvasPlaceholder}>
              <Text style={styles.canvasPlaceholderText}>No image selected</Text>
            </View>
          )}
        </View>
      </View>

      <TouchableOpacity style={styles.saveButton} activeOpacity={0.8} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#E8DED2',
  },
  canvasWrapper: {
    alignItems: 'center',
    marginBottom: 24,
  },
  canvas: {
    width: '100%',
    aspectRatio: 16 / 9,
    borderRadius: 18,
    backgroundColor: '#CFCFCF',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  canvasImage: {
    width: '100%',
    height: '100%',
  },
  canvasPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  canvasPlaceholderText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555555',
  },
  saveButton: {
    marginTop: 30,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#F36F21',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
});
