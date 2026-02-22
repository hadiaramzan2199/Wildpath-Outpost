import { Image, Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native';

type UploadTileProps = {
  imageUri?: string | null;
  onPress: () => void;
  height?: number;
  aspectRatio?: number;
  label?: string;
  containerStyle?: ViewStyle;
};

export function UploadTile({
  imageUri,
  onPress,
  height,
  aspectRatio,
  label = 'Tap to Upload',
  containerStyle,
}: UploadTileProps) {
  const hasImage = !!imageUri;

  return (
    <Pressable
      style={[
        styles.tile,
        height != null ? { height } : null,
        aspectRatio != null ? { aspectRatio } : null,
        containerStyle,
      ]}
      onPress={onPress}>
      {hasImage ? (
        <Image source={{ uri: imageUri ?? undefined }} style={styles.tileImage} resizeMode="cover" />
      ) : (
        <View style={styles.tilePlaceholder}>
          <Text style={styles.tilePlaceholderText}>{label}</Text>
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tile: {
    backgroundColor: '#CFCFCF',
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  tileImage: {
    width: '100%',
    height: '100%',
  },
  tilePlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tilePlaceholderText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555555',
  },
});
