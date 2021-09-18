import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {AirbnbRating} from 'react-native-elements';
import PropTypes from 'prop-types';
import {SharedElement} from 'react-navigation-shared-element';

import {COLORS} from '../../styles/color';
import {
  FONT_PRIMARY_MEDIUM,
  FONT_PRIMARY_REGULAR,
} from '../../styles/typography';
import AppLoveButton from '../AppLoveButton/AppLoveButton';
import AppTextIcon from '../AppTextIcon/AppTextIcon';
import {appSelectors} from '../../stores/slices/appSlice';
import {useSelector} from 'react-redux';

const AppRecipeCard = ({
  category,
  meal,
  area,
  image,
  id,
  onPress,
  onLikePress,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const Favorites = useSelector(appSelectors.favorites);

  useEffect(() => {
    const favorite = Favorites.find(item => item.idMeal === id);
    setIsFavorite(!!favorite);
  }, [Favorites, id]);

  return (
    <TouchableOpacity
      style={styles.AppRecipeCard}
      onPress={onPress}
      activeOpacity={0.8}>
      <View style={styles.AppRecipeCardMedia}>
        <View style={styles.AppRecipeCardLoveButton}>
          <AppLoveButton selected={isFavorite} onPress={onLikePress} />
        </View>
        <View style={styles.AppRecipeCardImageContainer}>
          <SharedElement id={`item.${id}.photo`}>
            <FastImage
              style={styles.AppRecipeCardImage}
              source={{
                uri: image,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
          </SharedElement>
        </View>
      </View>
      <View style={styles.AppRecipeCardContent}>
        <Text style={styles.AppRecipeCardCategory}>{category}</Text>
        <Text style={styles.AppRecipeCardMeal} numberOfLines={2}>
          {meal}
        </Text>
        <View style={styles.AppRecipeCardRating}>
          <AirbnbRating
            showRating={false}
            defaultRating={3}
            count={5}
            size={10}
            selectedColor={COLORS.orange}
            unSelectedColor={COLORS.lightGrey}
          />
        </View>
        <Text style={styles.AppRecipeCardCalories}>{area}</Text>
        <View style={styles.AppRecipeCardFooter}>
          <AppTextIcon label="10 mins" icon="time-outline" />
          <AppTextIcon label="1 Serving" icon="fast-food-outline" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

AppRecipeCard.propTypes = {
  category: PropTypes.string,
  meal: PropTypes.string,
  area: PropTypes.string,
  image: PropTypes.string,
  onPress: PropTypes.func,
};

export default AppRecipeCard;

const styles = StyleSheet.create({
  AppRecipeCard: {
    width: 150,
    minHeight: 210,
    borderRadius: 20,
    marginStart: 14,
    marginEnd: 14,
    backgroundColor: COLORS.superLight,
  },
  AppRecipeCardMedia: {
    position: 'relative',
    // width: '100%',
  },
  AppRecipeCardLoveButton: {
    position: 'absolute',
    zIndex: 10,
  },
  AppRecipeCardImageContainer: {},
  AppRecipeCardImage: {
    height: 90,
    width: '100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  AppRecipeCardContent: {
    padding: 16,
  },
  AppRecipeCardCategory: {
    fontSize: 8,
    lineHeight: 11,
    fontFamily: FONT_PRIMARY_MEDIUM,
    color: COLORS.blueShade,
    paddingBottom: 4,
  },
  AppRecipeCardMeal: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: FONT_PRIMARY_MEDIUM,
    color: COLORS.black,
    paddingBottom: 4,
  },
  AppRecipeCardCalories: {
    fontSize: 8,
    lineHeight: 11,
    fontFamily: FONT_PRIMARY_REGULAR,
    color: COLORS.orange,
    paddingBottom: 4,
  },
  AppRecipeCardRating: {
    alignSelf: 'flex-start',
  },
  AppRecipeCardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
