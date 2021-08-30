import React from 'react';
import {View, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import PropTypes from 'prop-types';

const MealImage = ({meal}) => {
  return (
    <View style={styles.mealImageContainer}>
      <FastImage
        style={styles.mealImage}
        source={{
          uri: meal.strMealThumb,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
    </View>
  );
};

MealImage.propTypes = {
  meal: PropTypes.object,
};

MealImage.defaultProps = {
  meal: {},
};

export default MealImage;

const styles = StyleSheet.create({
  mealImageContainer: {
    position: 'relative',
  },
  mealImage: {
    height: 182,
    borderRadius: 24,
  },
});
