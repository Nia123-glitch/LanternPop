import React, { useState } from 'react';
import WelcomeScreen from '../screens/WelcomeScreen';
import FoodScreen from '../screens/FoodScreen';
import TechnologyScreen from '../screens/TechnologyScreen';
import TravelingScreen from '../screens/TravelingScreen';

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

  if (currentScreen === 'welcome') return <WelcomeScreen navigateToCategory={navigateToCategory} />;
  if (currentScreen === 'food') return <FoodScreen />;
  if (currentScreen === 'technology') return <TechnologyScreen />;
  if (currentScreen === 'traveling') return <TravelingScreen />;

  return null;
}