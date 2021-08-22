import React from 'react';
import HomeScreen from '../screens/Home/Home';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
