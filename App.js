import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen.js';
import {appTabNavigator} from './components/appTabNavigator';
import createButtonTabNavigator from 'react-navigation-tabs';

export default function App() {
  return (

    <AppContainer/>
  )
}
const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  bottomTab:{screen:appTabNavigator}
})
const AppContainer = createAppContainer(switchNavigator)
