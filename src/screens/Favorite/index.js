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
import AppSearchBar from '../../components/AppSearchBar/AppSearchBar';
import AppRecipeItem from '../../components/AppRecipeItem/AppRecipeItem';

import {COLORS} from '../../styles/color';
import {FONT_PRIMARY_EXTRA_BOLD} from '../../styles/typography';

import LatestMealsArr from '../../api/fake/latest_meals.json';

const FavoriteScreen = () => {
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
          data={LatestMealsArr.meals}
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
