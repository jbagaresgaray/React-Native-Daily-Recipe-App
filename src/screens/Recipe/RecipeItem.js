import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {AirbnbRating, ListItem} from 'react-native-elements';
import {
  FONT_PRIMARY_MEDIUM,
  FONT_PRIMARY_REGULAR,
  FONT_SECONDARY_REGULAR,
} from '../../styles/typography';
import {COLORS} from '../../styles/color';
import AppTextIcon from '../../components/AppTextIcon/AppTextIcon';

const RecipeItem = props => {
  const {category, meal, area, onPress} = props;

  return (
    <ListItem
      containerStyle={styles.ListItemContainer}
      underlayColor={'transparent'}
      onPress={onPress}>
      <ListItem.Content style={styles.ListItemContent}>
        <ListItem.Subtitle style={styles.AppRecipeCardCategory}>
          {category}
        </ListItem.Subtitle>
        <ListItem.Title style={styles.AppRecipeCardMeal} numberOfLines={1}>
          {meal}
        </ListItem.Title>
        <View style={styles.AppRecipeCardRating}>
          <AirbnbRating
            showRating={false}
            defaultRating={3}
            count={5}
            size={15}
            selectedColor={COLORS.orange}
            unSelectedColor={COLORS.lightGrey}
          />
          <Text style={styles.AppRecipeCardCalories}>{area}</Text>
        </View>
        <View style={styles.AppRecipeCardFooter}>
          <AppTextIcon label="10 mins" icon="time-outline" size={18} />
          <AppTextIcon label="1 Serving" icon="fast-food-outline" size={18} />
        </View>
      </ListItem.Content>
    </ListItem>
  );
};

RecipeItem.propTypes = {
  category: PropTypes.string,
  meal: PropTypes.string,
  area: PropTypes.string,
  image: PropTypes.string,
  onPress: PropTypes.func,
};

export default RecipeItem;

const styles = StyleSheet.create({
  ListItemContainer: {
    backgroundColor: COLORS.white,
  },
  ListItemContent: {
    position: 'relative',
  },
  AppRecipeCardImage: {
    height: '100%',
    width: 75,
    borderRadius: 6,
  },
  AppRecipeCardCategory: {
    fontSize: 12,
    lineHeight: 14,
    fontFamily: FONT_PRIMARY_MEDIUM,
    color: COLORS.blueShade,
  },
  AppRecipeCardMeal: {
    fontSize: 20,
    lineHeight: 28,
    fontFamily: FONT_SECONDARY_REGULAR,
    color: COLORS.black,
  },
  AppRecipeCardRating: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  AppRecipeCardCalories: {
    fontSize: 12,
    lineHeight: 14,
    fontFamily: FONT_PRIMARY_REGULAR,
    color: COLORS.orange,
    paddingLeft: 8,
  },
  AppRecipeCardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '55%',
    paddingTop: 4,
  },
});
