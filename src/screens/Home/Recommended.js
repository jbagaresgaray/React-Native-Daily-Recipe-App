import React from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import AppTextHeader from '../../components/AppTextHeader/AppTextHeader';
import AppRecipeItem from '../../components/AppRecipeItem/AppRecipeItem';
import {HOME_ACTION} from '../../constants';

const Recommended = props => {
  const {meals, navigateRecipe} = props;

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
            onPress={() => navigateRecipe(item, HOME_ACTION.RECOMMENDED)}
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
  navigateRecipe: PropTypes.func,
};

export default Recommended;
