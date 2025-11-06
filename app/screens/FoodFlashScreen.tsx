import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const foodTerms = [
  {
    english: "Apple",
    chinese: "苹果",
    pinyin: "píng guǒ",
    radicals: ["艹", "木", "果"],
    image: null, // replace with actual image later
  },
  {
    english: "Rice",
    chinese: "米饭",
    pinyin: "mǐ fàn",
    radicals: ["米", "饭"],
    image: null,
  },
];

export default function FoodFlashScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={foodTerms}
        keyExtractor={(item) => item.english}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {item.image && <Image source={item.image} style={styles.image} />}
            <Text style={styles.english}>{item.english}</Text>
            <Text style={styles.chinese}>{item.chinese}</Text>
            <Text style={styles.pinyin}>{item.pinyin}</Text>
            <Text style={styles.radicals}>Radicals: {item.radicals.join(' ')}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#FFF8DC' },
  card: {
    backgroundColor: '#FFEFD5',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  image: { width: 100, height: 100, marginBottom: 12 },
  english: { fontSize: 20, fontWeight: 'bold' },
  chinese: { fontSize: 24, fontWeight: 'bold', marginTop: 4 },
  pinyin: { fontSize: 18, marginTop: 2 },
  radicals: { fontSize: 16, marginTop: 2, color: '#555' },
});