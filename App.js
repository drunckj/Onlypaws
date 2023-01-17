import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/Home';
import Cats from './components/Cats';
import Dogs from './components/Dogs';
const Stack = createNativeStackNavigator();

export default function App() {
  
  return(<NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Home'>
      <Stack.Screen
      
        name="Home"
        component={Home}
      
      />
            <Stack.Screen
      
      name="Cats"
      component={Cats}
    
    />
       <Stack.Screen
      
      name="Dogs"
      component={Dogs}
    
    />
      
    </Stack.Navigator>
  </NavigationContainer>)

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
