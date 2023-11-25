import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './Home';
import Settings from './Settings';
import Products from './Products';
import Notes from './Notes';

export type RootStackParamsList = {
  Home: undefined;
  Settings: {
    name: string;
    email: string;
  };
  Products: undefined;
  Notes: undefined;
};

const Stack = createStackNavigator<RootStackParamsList>();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Notes" component={Notes} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
