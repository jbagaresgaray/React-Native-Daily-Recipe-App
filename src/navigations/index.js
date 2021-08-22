import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LandingScreen from '../screens/Landing/Landing';
import LoginScreen from '../screens/Login/Login';
import RegisterScreen from '../screens/Register/Register';
import DrawerNavigator from './drawer';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Landing"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Main" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
