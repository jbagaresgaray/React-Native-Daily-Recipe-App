import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StackNavigator from './stack';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={StackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
