import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AirbnbRating, ListItem} from 'react-native-elements';
import PropTypes from 'prop-types';
import {COLORS} from '../../styles/color';
import FastImage from 'react-native-fast-image';
import {SharedElement} from 'react-navigation-shared-element';
import {
  FONT_PRIMARY_MEDIUM,
  FONT_PRIMARY_REGULAR,
} from '../../styles/typography';
import AppTextIcon from '../AppTextIcon/AppTextIcon';
import AppLoveButton from '../AppLoveButton/AppLoveButton';
import {useSelector} from 'react-redux';
import {appSelectors} from '../../stores/slices/appSlice';

const AppRecipeItem = props => {
  const {category, meal, area, image, id, onPress, onLikePress} = props;
  const [isFavorite, setIsFavorite] = useState(false);
  const Favorites = useSelector(appSelectors.favorites);

  useEffect(() => {
    const favorite = Favorites.find(item => item.idMeal === id);
    setIsFavorite(!!favorite);
  }, [Favorites, id]);

  return (
    <ListItem
      containerStyle={styles.ListItemContainer}
      underlayColor={'transparent'}
      onPress={onPress}>
      <SharedElement id={`item.${id}.photo`}>
        <FastImage
          style={styles.AppRecipeCardImage}
          source={{
            uri: image,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </SharedElement>
      <ListItem.Content style={styles.ListItemContent}>
        <View style={styles.AppRecipeCardLoveButton}>
          <AppLoveButton selected={isFavorite} onPress={onLikePress} />
        </View>
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
            size={10}
            selectedColor={COLORS.orange}
            unSelectedColor={COLORS.lightGrey}
          />
          <Text style={styles.AppRecipeCardCalories}>{area}</Text>
        </View>
        <View style={styles.AppRecipeCardFooter}>
          <AppTextIcon label="10 mins" icon="time-outline" />
          <AppTextIcon label="1 Serving" icon="fast-food-outline" />
        </View>
      </ListItem.Content>
    </ListItem>
  );
};

AppRecipeItem.propTypes = {
  category: PropTypes.string,
  meal: PropTypes.string,
  area: PropTypes.string,
  image: PropTypes.string,
  onPress: PropTypes.func,
};

export default AppRecipeItem;

const styles = StyleSheet.create({
  ListItemContainer: {
    borderRadius: 18,
    backgroundColor: COLORS.superLight,
    marginTop: 6,
    marginBottom: 6,
  },
  ListItemContent: {
    position: 'relative',
  },
  AppRecipeCardImage: {
    height: 65,
    width: 75,
    borderRadius: 6,
  },
  AppRecipeCardCategory: {
    fontSize: 8,
    lineHeight: 11,
    fontFamily: FONT_PRIMARY_MEDIUM,
    color: COLORS.blueShade,
  },
  AppRecipeCardMeal: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: FONT_PRIMARY_MEDIUM,
    color: COLORS.black,
    marginRight: 20,
  },
  AppRecipeCardRating: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  AppRecipeCardCalories: {
    fontSize: 8,
    lineHeight: 11,
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
  AppRecipeCardLoveButton: {
    position: 'absolute',
    zIndex: 10,
    top: -12,
    right: -5,
  },
});
