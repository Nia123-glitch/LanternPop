import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
  navigateToCategory: (category: string) => void;
}

export default function WelcomeScreen({ navigateToCategory }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Lantern Pop!</Text>
      <Text style={styles.subtitle}>Please choose a category:</Text>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#FF6347' }]}
        onPress={() => navigateToCategory('food')}
      >
        <Text style={styles.buttonText}>Food</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#6A5ACD' }]}
        onPress={() => navigateToCategory('technology')}
      >
        <Text style={styles.buttonText}>Technology</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#20B2AA' }]}
        onPress={() => navigateToCategory('traveling')}
      >
        <Text style={styles.buttonText}>Traveling</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E2F',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    color: '#FFD700',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
