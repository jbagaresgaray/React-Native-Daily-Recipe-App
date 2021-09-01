import {useNavigation} from '@react-navigation/core';
import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Dimensions,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import AppSearchBar from '../../components/AppSearchBar/AppSearchBar';
import {COLORS} from '../../styles/color';
import {
  FONT_PRIMARY_MEDIUM,
  FONT_SECONDARY_REGULAR,
} from '../../styles/typography';
import Recommended from './Recommended';
import TodaysRecipe from './TodaysRecipe';
import {mealsActions, mealsSelectors} from '../../stores/slices/mealsSlice';
import {generateRandomLetter} from '../../utils';
import {appActions, appSelectors} from '../../stores/slices/appSlice';
import {useToast} from 'react-native-toast-notifications';

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const toast = useToast();

  const [refreshing, setRefreshing] = useState(false);
  const LatestMealsArr = useSelector(mealsSelectors.TodaysRecipes);
  const RecommendedArr = useSelector(mealsSelectors.Recommended);
  const Favorites = useSelector(appSelectors.favorites);

  const navigateRecipe = (recipe, action) => {
    navigation.navigate('Recipe', {
      recipe,
      action,
    });
  };

  const isOnFavorites = meal => {
    const result = Favorites.find(item => item.idMeal === meal.idMeal);
    return !!result;
  };

  const onRefresh = useCallback(async () => {
    const randomRecipes = generateRandomLetter();
    const randomRecommended = generateRandomLetter();

    setRefreshing(true);

    await dispatch(mealsActions.todaysRecipeRequest(randomRecipes));
    await dispatch(mealsActions.recommendedRequest(randomRecommended));
    setRefreshing(false);
  }, [dispatch]);

  const onLikePress = async item => {
    await dispatch(appActions.setFavorite(item));

    if (isOnFavorites(item)) {
      toast.show('Removed to favorites');
    } else {
      toast.show('Added to favorites');
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.saferAreaView}>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <View style={styles.introContainer}>
            <Text style={styles.introUserText}>Bonjour, Emma</Text>
            <Text style={styles.introCaption} numberOfLines={2}>
              What would you like to cook {'\n'} today?
            </Text>
          </View>
          <View style={styles.searchBarContainer}>
            <AppSearchBar showFilter />
          </View>
          <TodaysRecipe
            meals={LatestMealsArr}
            navigateRecipe={navigateRecipe}
            onLikePress={onLikePress}
          />
          <View style={styles.borderLine} />
          <Recommended
            meals={RecommendedArr}
            navigateRecipe={navigateRecipe}
            onLikePress={onLikePress}
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
