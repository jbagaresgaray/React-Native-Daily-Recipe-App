import {useNavigation} from '@react-navigation/core';
import React, {useLayoutEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Dimensions,
  ScrollView,
} from 'react-native';

import AppMenuButton from '../../components/AppMenuButton/AppMenuButton';
import AppNotificationButton from '../../components/AppNotificationButton/AppNotificationButton';
import AppSearchBar from '../../components/AppSearchBar/AppSearchBar';
import {COLORS} from '../../styles/color';
import {
  FONT_PRIMARY_MEDIUM,
  FONT_SECONDARY_REGULAR,
} from '../../styles/typography';
import Recommended from './Recommended';
import TodaysRecipe from './TodaysRecipe';

import LatestMealsArr from '../../api/fake/latest_meals.json';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <AppMenuButton />,
      headerRight: () => <AppNotificationButton />,
    });
  }, [navigation]);

  const navigateRecipe = recipe => {
    navigation.navigate('Recipe', {
      recipe,
    });
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.saferAreaView}>
        <ScrollView>
          <View style={styles.introContainer}>
            <Text style={styles.introUserText}>Bonjour, Emma</Text>
            <Text style={styles.introCaption} numberOfLines={2}>
              What would you like to cook {'\n'} today?
            </Text>
          </View>
          <View style={styles.searchBarContainer}>
            <AppSearchBar />
          </View>
          <TodaysRecipe
            meals={LatestMealsArr.meals}
            navigateRecipe={navigateRecipe}
          />
          <View style={styles.borderLine} />
          <Recommended
            meals={LatestMealsArr.meals}
            navigateRecipe={navigateRecipe}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  saferAreaView: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingStart: 20,
    paddingEnd: 20,
  },
  introContainer: {
    paddingTop: 24,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  introUserText: {
    fontSize: 12,
    lineHeight: 16,
    color: COLORS.lightGrey,
    paddingBottom: 3,
    fontFamily: FONT_PRIMARY_MEDIUM,
  },
  introCaption: {
    fontSize: 20,
    lineHeight: 28,
    color: COLORS.black,
    paddingTop: 3,
    paddingBottom: 3,
    fontFamily: FONT_SECONDARY_REGULAR,
  },
  searchBarContainer: {
    paddingTop: 16,
    paddingBottom: 16,
    width: Dimensions.get('window').width - 100,
  },
  borderLine: {
    height: 1,
    backgroundColor: COLORS.superLight,
    marginTop: 16,
    marginBottom: 16,
  },
});
