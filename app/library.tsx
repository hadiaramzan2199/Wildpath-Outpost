import { useState } from 'react';
import { Image, LayoutChangeEvent, Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { router } from 'expo-router';
import { useLibrary } from '@/context/LibraryContext';

const BG = '#E8DED2';

export default function LibraryScreen() {
  const { items } = useLibrary();
  const [rowWidth, setRowWidth] = useState(0);

  const onLayout = (e: LayoutChangeEvent) => {
    setRowWidth(e.nativeEvent.layout.width);
  };

  const gap = 12;
  const tileSide = rowWidth > 0 ? (rowWidth - gap) / 2 : undefined;
  const tileStyle: ViewStyle = tileSide ? { width: tileSide, height: tileSide } : { width: '48%', aspectRatio: 1 };

  return (
    <View style={styles.container}>
      {items.length === 0 ? (
        <View style={styles.empty}>
          <Text style={styles.emptyTitle}>No items yet</Text>
          <Text style={styles.emptySubtitle}>Capture or upload to see content here.</Text>
        </View>
      ) : (
        <View style={styles.grid} onLayout={onLayout}>
          {items.map((it) => (
            <Pressable
              key={it.id}
              style={[styles.tile, tileStyle]}
              onPress={() => router.push({ pathname: '/send' as const, params: { uri: it.uri } })}>
              <Image source={{ uri: it.uri }} style={styles.image} resizeMode="cover" />
            </Pressable>
          ))}
        </View>
      )}
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
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  tile: {
    borderRadius: 18,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
    backgroundColor: '#CFCFCF',
    marginBottom: 12,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111',
    marginBottom: 6,
  },
  emptySubtitle: {
    fontSize: 14,
    color: '#333',
    opacity: 0.7,
  },
});
