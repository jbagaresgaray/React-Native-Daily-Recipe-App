import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Animated from 'react-native-reanimated';
import {
  DrawerItem,
  DrawerItemList,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {Icon} from 'react-native-elements';

import HomeStackNavigator from './stacks/HomeStack';
import FavoriteStackNavigator from './stacks/FavoriteStack';
import RecentlyViewedStackNavigator from './stacks/RecentlyViewedStack';
import SettingsStackNavigator from './stacks/SettingsStack';

import {COLORS} from '../styles/color';
import AppDrawerLabel from '../components/AppDrawerLabel/AppDrawerLabel';
import AppDrawerUser from '../components/AppDrawerUser/AppDrawerUser';
import {StyleSheet} from 'react-native';
import {
  FAVORITES_DRAWER_OPTIONS,
  HOME_DRAWER_OPTIONS,
  RECENT_DRAWER_OPTIONS,
  SETTINGS_DRAWER_OPTIONS,
} from '../constants/drawer';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
      contentContainerStyle={styles.drawerContentContainerStyle}>
      <AppDrawerUser />
      <DrawerItemList {...props} />
      <DrawerItem
        label={({focused}) => (
          <AppDrawerLabel label="About Us" focused={focused} />
        )}
        icon={({focused, size}) => (
          <Icon
            name={focused ? 'information-circle' : 'information-circle-outline'}
            type="ionicon"
            size={size}
            color={focused ? COLORS.orange : COLORS.lightGrey}
          />
        )}
      />
      <DrawerItem
        label={({focused}) => <AppDrawerLabel label="Help" focused={focused} />}
        icon={({focused, size}) => (
          <Icon
            name={focused ? 'help-circle' : 'help-circle-outline'}
            type="ionicon"
            size={size}
            color={focused ? COLORS.orange : COLORS.lightGrey}
          />
        )}
      />
      <DrawerItem
        label={({focused}) => (
          <AppDrawerLabel label="Sign Out" focused={focused} />
        )}
        icon={({focused, size}) => (
          <Icon
            name={focused ? 'exit' : 'exit-outline'}
            type="ionicon"
            size={size}
            color={focused ? COLORS.orange : COLORS.lightGrey}
          />
        )}
        onPress={() => props.navigation.navigate('Landing')}
      />
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  const [progress, setProgress] = React.useState(new Animated.Value(0));
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.9],
  });
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 25],
  });
  const animatedStyle = {borderRadius, transform: [{scale}]};

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerType="slide"
      overlayColor="transparent"
      drawerStyle={styles.drawerStyles}
      sceneContainerStyle={styles.sceneContainerStyle}
      contentContainerStyle={styles.contentContainerStyle}
      drawerContentOptions={{
        activeBackgroundColor: 'transparent',
        activeTintColor: 'white',
        inactiveTintColor: 'white',
      }}
      drawerContent={props => {
        setProgress(props.progress);
        return <CustomDrawerContent {...props} />;
      }}>
      <Drawer.Screen name="Home" options={HOME_DRAWER_OPTIONS}>
        {props => <HomeStackNavigator {...props} style={animatedStyle} />}
      </Drawer.Screen>
      <Drawer.Screen name="Favorites" options={FAVORITES_DRAWER_OPTIONS}>
        {props => <FavoriteStackNavigator {...props} style={animatedStyle} />}
      </Drawer.Screen>
      <Drawer.Screen name="RecentlyViewed" options={RECENT_DRAWER_OPTIONS}>
        {props => (
          <RecentlyViewedStackNavigator {...props} style={animatedStyle} />
        )}
      </Drawer.Screen>
      <Drawer.Screen name="Settings" options={SETTINGS_DRAWER_OPTIONS}>
        {props => <SettingsStackNavigator {...props} style={animatedStyle} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({
  sceneContainerStyle: {
    backgroundColor: '#FEFEFF',
  },
  contentContainerStyle: {
    flex: 1,
  },
  drawerStyles: {flex: 1, backgroundColor: '#FEFEFF', padding: 0, margin: 0},
  drawerItemStyle: {
    borderLeftWidth: 6,
    borderColor: COLORS.orange,
  },
  drawerContentContainerStyle: {
    flex: 1,
    // backgroundColor: "red",
  },
});
