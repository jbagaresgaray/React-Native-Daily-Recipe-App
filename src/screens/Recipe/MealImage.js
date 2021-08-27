import React from 'react';
import {View, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import PropTypes from 'prop-types';
import AppTextIcon from '../../components/AppTextIcon/AppTextIcon';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../styles/color';

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
      <View style={styles.mealServingContainer}>
        <View style={styles.mealCardFooter}>
          <AppTextIcon
            label="10 mins"
            icon="time-outline"
            size={18}
            textStyle={styles.AppTextIconStyle}
          />
        </View>
        <View style={styles.mealCardFooter}>
          <AppTextIcon
            label="1 Serving"
            icon="fast-food-outline"
            size={18}
            textStyle={styles.AppTextIconStyle}
          />
        </View>
      </View>
      <LinearGradient
        colors={['rgba(0, 0, 0, 0)', 'black']}
        style={styles.linearGradient}
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
  mealServingContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 10,

    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingStart: 20,
    paddingEnd: 20,
    paddingBottom: 18,
  },
  AppTextIconStyle: {
    fontSize: 12,
    lineHeight: 14,
    color: COLORS.white,
  },
  linearGradient: {
    height: 60,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderRadius: 24,
  },
});
