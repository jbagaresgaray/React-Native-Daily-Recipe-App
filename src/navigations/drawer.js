import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeStackNavigator from './stacks/HomeStack';
import FavoriteStackNavigator from './stacks/FavoriteStack';
import RecentlyViewedStackNavigator from './stacks/RecentlyViewedStack';
import SettingsStackNavigator from './stacks/SettingsStack';

import DummyScreen from '../screens/Dummy';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {DrawerItemList} from '@react-navigation/drawer';
import {DrawerItem} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="About Us" />
      <DrawerItem label="Help" />
      <DrawerItem label="Sign Out" />
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeStackNavigator} />
      <Drawer.Screen name="Favorites" component={FavoriteStackNavigator} />
      <Drawer.Screen
        name="RecentlyViewed"
        component={RecentlyViewedStackNavigator}
        options={{
          title: 'Recently Viewed',
        }}
      />
      <Drawer.Screen name="Settings" component={SettingsStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
