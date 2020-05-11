import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          title: 'WhatsApp',    //  color='white' size={30}
          headerStyle: { backgroundColor: '#167c73' },
          headerTintColor: '#fff', 
          headerTitleStyle:{
            fontWeight: 'bold',
          }, 
          headerRight: ()=>{
            <View>
              <Ionicons name="md-calendar" color='green' size={30} />
            </View>
          }
                  
        }}
      >
        <Stack.Screen name="WhatsApp" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// });
