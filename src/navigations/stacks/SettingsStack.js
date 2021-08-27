import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {COLORS} from '../../styles/color';
import SettingsScreen from '../../screens/Settings';
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

const SettingsStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="SettingsScreen"
      screenOptions={navigationOptions}>
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="Notification" component={NotificationsScreen} />
    </Stack.Navigator>
  );
};

export default SettingsStackNavigator;
