import React from 'react';
import {Icon} from 'react-native-elements';
import AppDrawerLabel from '../components/AppDrawerLabel/AppDrawerLabel';
import {COLORS} from '../styles/color';

export const HOME_DRAWER_OPTIONS = {
  drawerLabel: ({focused}) => <AppDrawerLabel label="Home" focused={focused} />,
  drawerIcon: ({focused, size}) => (
    <Icon
      name={focused ? 'home' : 'home-outline'}
      type="ionicon"
      size={size}
      color={focused ? COLORS.orange : COLORS.lightGrey}
    />
  ),
};

export const FAVORITES_DRAWER_OPTIONS = {
  drawerLabel: ({focused}) => (
    <AppDrawerLabel label="Favorites" focused={focused} />
  ),
  drawerIcon: ({focused, size}) => (
    <Icon
      name={focused ? 'heart' : 'heart-outline'}
      type="ionicon"
      size={size}
      color={focused ? COLORS.orange : COLORS.lightGrey}
    />
  ),
};

export const RECENT_DRAWER_OPTIONS = {
  drawerLabel: ({focused}) => (
    <AppDrawerLabel label="Recently Viewed" focused={focused} />
  ),
  drawerIcon: ({focused, size}) => (
    <Icon
      name={focused ? 'play' : 'play-outline'}
      type="ionicon"
      size={size}
      color={focused ? COLORS.orange : COLORS.lightGrey}
    />
  ),
};

export const SETTINGS_DRAWER_OPTIONS = {
  drawerLabel: ({focused}) => (
    <AppDrawerLabel label="Settings" focused={focused} />
  ),
  drawerIcon: ({focused, size}) => (
    <Icon
      name={focused ? 'settings' : 'settings-outline'}
      type="ionicon"
      size={size}
      color={focused ? COLORS.orange : COLORS.lightGrey}
    />
  ),
};
