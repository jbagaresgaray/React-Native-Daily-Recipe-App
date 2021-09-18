import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {COLORS} from '../../styles/color';

import RecentlyViewedScreen from '../../screens/RecentlyViewed';
import NotificationsScreen from '../../screens/Notifications';
import RecipeScreen from '../../screens/Recipe';
import Animated from 'react-native-reanimated';
import {StyleSheet} from 'react-native';
import AppMenuButton from '../../components/AppMenuButton/AppMenuButton';
import AppNotificationButton from '../../components/AppNotificationButton/AppNotificationButton';

const Stack = createSharedElementStackNavigator({
  name: 'RecentlyViewedStackNavigator',
  debug: true,
});

const navigationOptions = {
  gestureEnabled: false,
  headerStyle: {
    backgroundColor: COLORS.white,
    shadowColor: 'transparent',
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
    },
    elevation: 0,
  },
  headerBackTitleVisible: false,
  headerTintColor: COLORS.black,
  headerTitle: null,
  headerLeft: () => <AppMenuButton />,
  headerRight: () => <AppNotificationButton />,
};

const RecentlyViewedStackNavigator = ({style}) => {
  return (
    <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
      <Stack.Navigator
        initialRouteName="RecentlyViewedScreen"
        screenOptions={navigationOptions}>
        <Stack.Screen
          name="RecentlyViewedScreen"
          component={RecentlyViewedScreen}
        />
        <Stack.Screen name="Notification" component={NotificationsScreen} />
        <Stack.Screen
          name="Recipe"
          component={RecipeScreen}
          sharedElements={(route, otherRoute, showing) => {
            const {recipe} = route.params;
            return [
              {
                id: `item.${recipe.idMeal}.photo`,
                animation: 'fade',
              },
            ];
          }}
        />
      </Stack.Navigator>
    </Animated.View>
  );
};

export default RecentlyViewedStackNavigator;

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
