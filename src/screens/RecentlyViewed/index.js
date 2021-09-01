import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useToast} from 'react-native-toast-notifications';

import AppSearchBar from '../../components/AppSearchBar/AppSearchBar';
import AppRecipeItem from '../../components/AppRecipeItem/AppRecipeItem';

import {COLORS} from '../../styles/color';
import {FONT_PRIMARY_EXTRA_BOLD} from '../../styles/typography';

import AppTextSeeAll from '../../components/AppTextSeeAll/AppTextSeeAll';
import {appActions, appSelectors} from '../../stores/slices/appSlice';

const RecentlyViewedScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const toast = useToast();
  const LatestMealsArr = useSelector(appSelectors.recentlyView);
  const Favorites = useSelector(appSelectors.favorites);

  const isOnFavorites = meal => {
    const result = Favorites.find(item => item.idMeal === meal.idMeal);
    return !!result;
  };

  const onClearRecents = () => {
    dispatch(appActions.clearRecentlyView());
  };

  const onLikePress = async item => {
    await dispatch(appActions.setFavorite(item));

    if (isOnFavorites(item)) {
      toast.show('Removed to favorites');
    } else {
      toast.show('Added to favorites');
    }
  };

  const navigateRecipe = (recipe, action) => {
    navigation.navigate('Recipe', {
      recipe,
      action,
    });
  };

  const ListHeaderComponent = () => {
    return (
      <>
        <View style={styles.introContainer}>
          <Text style={styles.introCaption} numberOfLines={2}>
            Recently Viewed
          </Text>
          <AppTextSeeAll label="Clear" onPress={onClearRecents} />
        </View>
        <View style={styles.searchBarContainer}>
          <AppSearchBar showFilter />
        </View>
      </>
    );
  };

  const renderItem = ({item, index}) => {
    const meal = item.meal;
    return (
      <AppRecipeItem
        key={index}
        meal={meal.strMeal}
        category={meal.strCategory}
        area={meal.strArea}
        image={meal.strMealThumb}
        id={meal.idMeal}
        onLikePress={() => onLikePress(meal)}
        onPress={() => navigateRecipe(meal)}
      />
    );
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.saferAreaView}>
        {ListHeaderComponent()}
        <FlatList
          // ListHeaderComponent={}
          renderItem={renderItem}
          data={LatestMealsArr}
          keyExtractor={(item, index) => 'key' + index}
        />
      </SafeAreaView>
    </>
  );
};

export default RecentlyViewedScreen;

const styles = StyleSheet.create({
  saferAreaView: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingStart: 30,
    paddingEnd: 30,
  },
  introContainer: {
    paddingTop: 12,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  introCaption: {
    fontSize: 20,
    lineHeight: 28,
    color: COLORS.black,
    paddingTop: 3,
    paddingBottom: 3,
    fontFamily: FONT_PRIMARY_EXTRA_BOLD,
  },
  searchBarContainer: {
    paddingTop: 12,
    width: Dimensions.get('window').width - 100,
  },
});
