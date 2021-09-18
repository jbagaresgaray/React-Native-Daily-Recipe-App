import {useNavigation, useRoute} from '@react-navigation/core';
import React, {createRef, useEffect, useLayoutEffect, useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {AirbnbRating} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {SharedElement} from 'react-navigation-shared-element';

import {COLORS} from '../../styles/color';
import {
  FONT_PRIMARY_MEDIUM,
  FONT_PRIMARY_REGULAR,
  FONT_SECONDARY_REGULAR,
} from '../../styles/typography';
import AppNotificationButton from '../../components/AppNotificationButton/AppNotificationButton';
import AppLoveButton from '../../components/AppLoveButton/AppLoveButton';
import MealImage from './MealImage';

import RecipeDirections from './RecipeDirections';
import RecipeIngredients from './RecipeIngredients';
import {HOME_ACTION, MEAL_DB_INGREDIENT_IMAGE} from '../../constants';
import AppTextIcon from '../../components/AppTextIcon/AppTextIcon';
import AppBackButton from '../../components/AppBackButton/AppBackButton';

import {listsSelectors} from '../../stores/slices/listSlice';
import {mealsSelectors} from '../../stores/slices/mealsSlice';
import {appActions} from '../../stores/slices/appSlice';

const RecipeScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const actionSheetRef = createRef();
  const dispatch = useDispatch();
  const [meal, setMeal] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const IngredientsArr = useSelector(listsSelectors.Ingredients);
  const LatestMealsArr = useSelector(mealsSelectors.TodaysRecipes);
  const RecommendedArr = useSelector(mealsSelectors.Recommended);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <AppBackButton />,
      headerRight: () => <AppNotificationButton />,
      headerStyle: {
        backgroundColor: '#F5F5F5',
        shadowColor: 'transparent',
        shadowRadius: 0,
        shadowOffset: {
          height: 0,
        },
      },
    });
  }, [navigation]);

  useEffect(() => {
    const params = route.params;
    if (params && params.recipe) {
      const recipe = params.recipe;
      filterMeal(recipe.idMeal, params.action, recipe);
      dispatch(appActions.setRecentlyView(recipe));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const filterMeal = (id, action, recipe) => {
    let tempIngredients = [];
    let mealObj = {};

    if (action === HOME_ACTION.RECOMMENDED) {
      mealObj = RecommendedArr.find(item => item.idMeal === id);
    } else if (action === HOME_ACTION.TODAY) {
      mealObj = LatestMealsArr.find(item => item.idMeal === id);
    } else {
      mealObj = recipe;
    }

    if (mealObj) {
      setMeal(mealObj);

      if (actionSheetRef && actionSheetRef.current) {
        setTimeout(() => {
          onDirectionRef();
        }, 300);
      }

      Object.keys(mealObj).forEach(key => {
        if (key.indexOf('strIngredient') !== -1) {
          const value = mealObj[key];
          if (value !== '' && value !== null) {
            const resultData = IngredientsArr.find(
              item =>
                item.strIngredient.toLowerCase() ===
                String(value).toLowerCase(),
            );

            if (resultData) {
              const imageName =
                resultData.strIngredient &&
                resultData.strIngredient.replace(/\s/g, '%20');

              tempIngredients.push({
                name: resultData.strIngredient,
                url: `${MEAL_DB_INGREDIENT_IMAGE}${imageName}.png`,
                encodedUrl: encodeURI(
                  `${MEAL_DB_INGREDIENT_IMAGE}${imageName}.png`,
                ),
              });
            }
          }
        }
      });
      setIngredients(tempIngredients);
    }
  };

  const onDirectionRef = () => {
    actionSheetRef.current?.setModalVisible();
  };

  return (
    <SafeAreaView style={styles.saferAreaView}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.introContainer}>
          <View>
            <Text style={styles.mealCategory}>{meal.strCategory}</Text>
            <Text style={styles.mealCaption} numberOfLines={2}>
              {meal.strMeal}
            </Text>
            <Text style={styles.mealArea}>{meal.strArea}</Text>
          </View>
          <AppLoveButton size={21} />
        </View>
        <View style={styles.mealRatingContainer}>
          <AirbnbRating
            showRating={false}
            defaultRating={3}
            count={5}
            size={15}
            selectedColor={COLORS.orange}
            unSelectedColor={COLORS.lightGrey}
          />
        </View>
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
        <SharedElement id={`item.${meal.idMeal}.photo`}>
          <MealImage meal={meal} />
        </SharedElement>
        <RecipeIngredients ingredients={ingredients} />
        <RecipeDirections
          meal={meal}
          ingredients={ingredients}
          recipeRef={actionSheetRef}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecipeScreen;

const styles = StyleSheet.create({
  saferAreaView: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollView: {
    flex: 1,
    paddingStart: 20,
    paddingEnd: 20,
  },
  introContainer: {
    paddingTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mealCategory: {
    fontSize: 12,
    lineHeight: 14,
    color: COLORS.blueShade,
    paddingBottom: 3,
    fontFamily: FONT_PRIMARY_MEDIUM,
  },
  mealCaption: {
    fontSize: 20,
    lineHeight: 28,
    color: COLORS.black,
    paddingTop: 3,
    paddingBottom: 8,
    fontFamily: FONT_SECONDARY_REGULAR,
  },
  mealArea: {
    fontSize: 12,
    lineHeight: 14,
    color: COLORS.orange,
    paddingBottom: 3,
    fontFamily: FONT_PRIMARY_REGULAR,
  },
  mealRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 6,
  },
  mealCardFooter: {
    paddingBottom: 24,
  },
  borderLine: {
    height: 1,
    backgroundColor: COLORS.superLight,
    marginTop: 16,
    marginBottom: 16,
  },
  mealServingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  AppTextIconStyle: {
    fontSize: 12,
    lineHeight: 14,
    color: COLORS.lightGrey,
  },
});
