import { Alert, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

type PickerResult = string | null;

export function useImagePicker() {
  const [cameraPermission, requestCameraPermission] = ImagePicker.useCameraPermissions();
  const [libraryPermission, requestLibraryPermission] = ImagePicker.useMediaLibraryPermissions();

  const pickFromCamera = async (): Promise<PickerResult> => {
    try {
      if (Platform.OS === 'web') {
        Alert.alert('Note', 'Direct camera capture is limited on web. Opening file picker.');
        return pickFromLibrary();
      }
      let permission = cameraPermission;

      if (!permission || !permission.granted) {
        const result = await requestCameraPermission();

        if (!result || !result.granted) {
          Alert.alert('Permission required', 'Camera permission is needed to take a photo.');
          return null;
        }

        permission = result;
      }

      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.7,
      });

      if (result.canceled || !result.assets || result.assets.length === 0) {
        return null;
      }

      return result.assets[0].uri ?? null;
    } catch {
      Alert.alert('Error', 'Something went wrong while opening the camera.');
      return null;
    }
  };

  const pickFromLibrary = async (): Promise<PickerResult> => {
    try {
      let permission = libraryPermission;

      if (!permission || !permission.granted) {
        const result = await requestLibraryPermission();

        if (!result || !result.granted) {
          Alert.alert(
            'Permission required',
            'Media library permission is needed to choose an image.'
          );
          return null;
        }

        permission = result;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.7,
      });

      if (result.canceled || !result.assets || result.assets.length === 0) {
        return null;
      }

      return result.assets[0].uri ?? null;
    } catch {
      Alert.alert('Error', 'Something went wrong while selecting an image.');
      return null;
    }
  };

  return {
    pickFromCamera,
    pickFromLibrary,
  };
}
