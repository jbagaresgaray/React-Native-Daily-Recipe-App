import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/Home';
import {COLORS} from '../../styles/color';
import NotificationsScreen from '../../screens/Notifications';

const Stack = createStackNavigator();
const navigationOptions = {
  gestureEnabled: false,
  headerStyle: {
    backgroundColor: COLORS.white,
  },
  headerBackTitleVisible: false,
  headerTintColor: COLORS.black,
  headerTitle: null,
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={navigationOptions}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Notification" component={NotificationsScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
