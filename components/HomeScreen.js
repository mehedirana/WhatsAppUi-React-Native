import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
const HomeScreen = () => {
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="chat" component={ChatScreen} />
            <Tab.Screen name="call" component={CallScreen} />
            <Tab.Screen name="status" component={StatusScreen} />
        </Tab.Navigator>
    </NavigationContainer>
}

export default HomeScreen;
