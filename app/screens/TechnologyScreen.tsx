import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TechnologyScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Coming Soon!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#6A5ACD' },
  text: { fontSize: 28, color: '#fff', fontWeight: 'bold' },
});
