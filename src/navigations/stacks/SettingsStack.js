import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {COLORS} from '../../styles/color';
import SettingsScreen from '../../screens/Settings';
import NotificationsScreen from '../../screens/Notifications';
import Animated from 'react-native-reanimated';
import {StyleSheet} from 'react-native';
import AppMenuButton from '../../components/AppMenuButton/AppMenuButton';
import AppNotificationButton from '../../components/AppNotificationButton/AppNotificationButton';

const Stack = createStackNavigator();
const navigationOptions = {
  gestureEnabled: false,
  headerStyle: {
    backgroundColor: COLORS.white,
  },
  headerBackTitleVisible: false,
  headerTintColor: COLORS.black,
  headerTitle: null,
  headerLeft: () => <AppMenuButton />,
  headerRight: () => <AppNotificationButton />,
};

const SettingsStackNavigator = ({style}) => {
  return (
    <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
      <Stack.Navigator
        initialRouteName="SettingsScreen"
        screenOptions={navigationOptions}>
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="Notification" component={NotificationsScreen} />
      </Stack.Navigator>
    </Animated.View>
  );
};

export default SettingsStackNavigator;

const styles = StyleSheet.create({
  stack: {
    flex: 1,
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
    // overflow: 'scroll',
    // borderWidth: 1,
  },
});
