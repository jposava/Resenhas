import { StatusBar, View } from 'react-native';
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';


import Home from './src/pages/Home';
import Resenha from './src/pages/Resenha';

console.disableYellowBox = true;

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    Resenha
  })
);

export default function App() {
  return (
    <View>
      {<StatusBar backgroundColor="#D92323"/>}
      <Routes />
    </View>
  );
}