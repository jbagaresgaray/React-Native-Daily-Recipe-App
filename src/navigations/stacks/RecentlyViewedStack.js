import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {COLORS} from '../../styles/color';

import RecentlyViewedScreen from '../../screens/RecentlyViewed';
import NotificationsScreen from '../../screens/Notifications';
import RecipeScreen from '../../screens/Recipe';

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

const RecentlyViewedStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="RecentlyViewedScreen"
      screenOptions={navigationOptions}>
      <Stack.Screen
        name="RecentlyViewedScreen"
        component={RecentlyViewedScreen}
      />
      <Stack.Screen name="Notification" component={NotificationsScreen} />
      <Stack.Screen name="Recipe" component={RecipeScreen} />
    </Stack.Navigator>
  );
};

export default RecentlyViewedStackNavigator;
