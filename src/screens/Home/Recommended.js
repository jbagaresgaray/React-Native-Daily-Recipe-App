import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import PropTypes from 'prop-types';
import AppTextHeader from '../../components/AppTextHeader/AppTextHeader';
import AppRecipeItem from '../../components/AppRecipeItem/AppRecipeItem';

const Recommended = props => {
  const {meals} = props;

  return (
    <View style={styles.RecommendedContainer}>
      <AppTextHeader caption="Recommended" />
      {meals &&
        meals.map((item, index) => (
          <AppRecipeItem
            key={index}
            meal={item.strMeal}
            category={item.strCategory}
            area={item.strArea}
            image={item.strMealThumb}
          />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  RecommendedContainer: {},
});

Recommended.propTypes = {
  meals: PropTypes.array,
};

export default Recommended;
