import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatScreen from './screens/ChatScreen';
import CallScreen from './screens/CallScreen';
import StatusScreen from './screens/StatusScreen';

const Tab = createMaterialTopTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="chat" component={ChatScreen} />
        <Tab.Screen name="call" component={CallScreen} />
        <Tab.Screen name="status" component={StatusScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// });
