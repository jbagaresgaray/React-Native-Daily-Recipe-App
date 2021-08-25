import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import PropTypes from 'prop-types';

import AppTextHeader from '../../components/AppTextHeader/AppTextHeader';
import AppRecipeCard from '../../components/AppRecipeCard/AppRecipeCard';

const TodaysRecipe = ({meals}) => {
  const renderItem = ({item, index}) => {
    return (
      <AppRecipeCard
        key={index}
        meal={item.strMeal}
        category={item.strCategory}
        area={item.strArea}
        image={item.strMealThumb}
      />
    );
  };

  return (
    <View style={styles.TodaysRecipeContainer}>
      <AppTextHeader caption="Today's Fresh Recipes" />
      <FlatList
        horizontal
        data={meals}
        renderItem={renderItem}
        keyExtractor={(item, index) => 'key' + index}
      />
    </View>
  );
};

TodaysRecipe.propTypes = {
  meals: PropTypes.array,
};

const styles = StyleSheet.create({
  TodaysRecipeContainer: {},
});

export default TodaysRecipe;