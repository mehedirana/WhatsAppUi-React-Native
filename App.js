import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View } from 'react-native';
import HomeScreen from './components/HomeScreen';
const Tab = createMaterialTopTabNavigator();
export default function App() {
  return (
    <View>
      <HomeScreen/>
    </View>
  
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// });
