import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LandingScreen from '../screens/Landing/Landing';
import LoginScreen from '../screens/Login/Login';
import RegisterScreen from '../screens/Register/Register';

const Stack = createNativeStackNavigator();

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
    </Stack.Navigator>
  );
};

export default RootNavigator;
