import React, { useState } from 'react';
import WelcomeScreen from '../screens/WelcomeScreen';
import FoodScreen from '../screens/FoodScreen';
import TechnologyScreen from '../screens/TechnologyScreen';
import TravelingScreen from '../screens/TravelingScreen';
import FoodFlashScreen from '../screens/FoodFlashScreen';

export default function Main() {
  const [currentScreen, setCurrentScreen] = useState('welcome');

  const navigateToCategory = (category: string) => {
    switch (category) {
      case 'food':
        setCurrentScreen('food');
        break;
      case 'technology':
        setCurrentScreen('technology');
        break;
      case 'traveling':
        setCurrentScreen('traveling');
        break;
      default:
        setCurrentScreen('welcome');
    }
  };

  const navigateToFlashcards = () => {
    setCurrentScreen('foodFlashcards');
  };

  if (currentScreen === 'food')return <FoodScreen navigateToFlashcards={navigateToFlashcards} />;
  if (currentScreen === 'welcome') return <WelcomeScreen navigateToCategory={navigateToCategory} />;
  if (currentScreen === 'technology') return <TechnologyScreen />;
  if (currentScreen === 'traveling') return <TravelingScreen />;
  if (currentScreen === 'foodFlashcards') return <FoodFlashScreen />;

  return null;
}