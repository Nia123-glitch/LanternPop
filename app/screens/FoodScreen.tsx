import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface FoodScreenProps {
  navigateToFlashcards: () => void;
}

const { width, height } = Dimensions.get('window');

const WORDS = [
  { english: 'Apple', chinese: '苹果' },
  { english: 'Banana', chinese: '香蕉' },
  { english: 'Bread', chinese: '面包' },
  { english: 'Cake', chinese: '蛋糕' },
  { english: 'Cheese', chinese: '奶酪' },
];

export default function FoodScreen({ navigateToFlashcards }: FoodScreenProps) {
  const [score, setScore] = useState(0);
  const [target, setTarget] = useState(WORDS[Math.floor(Math.random() * WORDS.length)]);
  const [lanterns, setLanterns] = useState<any[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    const interval = setInterval(() => {
      const isCorrect = Math.random() < 0.3;
      let char = '';
      if (isCorrect) char = target.chinese;
      else {
        let distractor;
        do {
          distractor = WORDS[Math.floor(Math.random() * WORDS.length)].chinese;
        } while (distractor === target.chinese);
        char = distractor;
      }

      const left = Math.random() * (width - 50);
      setLanterns((prev) => [...prev, { id: Date.now(), char, left, top: height }]);
    }, 1000);

    return () => clearInterval(interval);
  }, [target]);

  useEffect(() => {
    const animation = setInterval(() => {
      setLanterns((prev) =>
        prev
          .map((l) => ({ ...l, top: l.top - 3 }))
          .filter((l) => l.top > -50)
      );
    }, 30);

    return () => clearInterval(animation);
  }, []);

  const handleTap = (char: string, id: number) => {
    if (char === target.chinese) {
      setScore((prev) => prev + 1);

      let newTarget;
      do {
        newTarget = WORDS[Math.floor(Math.random() * WORDS.length)];
      } while (newTarget.english === target.english);
      setTarget(newTarget);
    }

    setLanterns((prev) => prev.filter((l) => l.id !== id));
  };

    return (
        <View style={styles.container}>
        <Text style={styles.target}>Match: {target.english}</Text>
        <Text style={styles.score}>Score: {score}</Text>

        <TouchableOpacity
    style={{
        marginTop: 20,
        padding: 12,
        backgroundColor: '#FFD700',
        borderRadius: 8,
        alignItems: 'center',
    }}
    onPress={navigateToFlashcards}
    >
    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}>
        View Flashcards
    </Text>
    </TouchableOpacity>

      {lanterns.map((lantern) => (
        <TouchableOpacity
          key={lantern.id}
          style={[styles.lantern, { left: lantern.left, top: lantern.top }]}
          onPress={() => handleTap(lantern.char, lantern.id)}
        >
          <Text style={styles.lanternText}>{lantern.char}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E2F',
  },
  target: {
    color: '#FFD700',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
  },
  score: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
  },
  lantern: {
    position: 'absolute',
    width: 50,
    height: 50,
    backgroundColor: '#FF6347',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lanternText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
