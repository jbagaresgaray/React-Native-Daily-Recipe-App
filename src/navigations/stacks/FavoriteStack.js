import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {COLORS} from '../../styles/color';

import FavoriteScreen from '../../screens/Favorite';

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

const FavoriteStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="FavoriteScreen"
      screenOptions={navigationOptions}>
      <Stack.Screen name="FavoriteScreen" component={FavoriteScreen} />
    </Stack.Navigator>
  );
};

export default FavoriteStackNavigator;
