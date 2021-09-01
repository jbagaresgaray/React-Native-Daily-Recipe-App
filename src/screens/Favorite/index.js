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
import {useNavigation} from '@react-navigation/core';

import AppSearchBar from '../../components/AppSearchBar/AppSearchBar';
import AppRecipeItem from '../../components/AppRecipeItem/AppRecipeItem';

import {COLORS} from '../../styles/color';
import {FONT_PRIMARY_EXTRA_BOLD} from '../../styles/typography';

import {appActions, appSelectors} from '../../stores/slices/appSlice';
import {useToast} from 'react-native-toast-notifications';

const FavoriteScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const toast = useToast();

  const LatestMealsArr = useSelector(appSelectors.favorites);

  const isOnFavorites = meal => {
    const result = LatestMealsArr.find(item => item.idMeal === meal.idMeal);
    return !!result;
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
            Favorites
          </Text>
        </View>
        <View style={styles.searchBarContainer}>
          <AppSearchBar showFilter />
        </View>
      </>
    );
  };

  const renderItem = ({item, index}) => {
    return (
      <AppRecipeItem
        key={index}
        meal={item.strMeal}
        category={item.strCategory}
        area={item.strArea}
        image={item.strMealThumb}
        id={item.idMeal}
        onLikePress={() => onLikePress(item)}
        onPress={() => navigateRecipe(item)}
      />
    );
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.saferAreaView}>
        {ListHeaderComponent()}
        <FlatList
          renderItem={renderItem}
          data={LatestMealsArr}
          keyExtractor={(item, index) => 'key' + index}
        />
      </SafeAreaView>
    </>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  saferAreaView: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingStart: 30,
    paddingEnd: 30,
  },
  introContainer: {
    paddingTop: 12,
    justifyContent: 'center',
    alignItems: 'flex-start',
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
