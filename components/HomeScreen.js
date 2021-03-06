import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatScreen from '../screens/ChatScreen';
import CallScreen from '../screens/CallScreen';
import StatusScreen from '../screens/StatusScreen';


const Tab = createMaterialTopTabNavigator();
const HomeScreen = () => {
    return (
        //   <NavigationContainer>
        <Tab.Navigator
        tabBarOptions={{
             labelStyle: { fontSize: 15, color:'white', fontWeight:'bold' },
            // tabStyle: { width: 100 },
            style: { backgroundColor: '#167c73' },
          }}
        >
            <Tab.Screen name="chat" component={ChatScreen} />
            <Tab.Screen name="call" component={CallScreen} />
            <Tab.Screen name="status" component={StatusScreen} />
        </Tab.Navigator>
        //    </NavigationContainer>
    )

}
export default HomeScreen;