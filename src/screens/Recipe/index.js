import {useNavigation, useRoute} from '@react-navigation/core';
import React, {createRef, useEffect, useLayoutEffect, useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {AirbnbRating} from 'react-native-elements';
import {COLORS} from '../../styles/color';
import {
  FONT_PRIMARY_MEDIUM,
  FONT_PRIMARY_REGULAR,
  FONT_SECONDARY_REGULAR,
} from '../../styles/typography';
import AppNotificationButton from '../../components/AppNotificationButton/AppNotificationButton';
import AppLoveButton from '../../components/AppLoveButton/AppLoveButton';
import MealImage from './MealImage';

import LatestMealsArr from '../../api/fake/latest_meals.json';
import IngredientsArr from '../../api/fake/ingredients.json';

import RecipeDirections from './RecipeDirections';
import RecipeIngredients from './RecipeIngredients';
import {MEAL_DB_INGREDIENT_IMAGE} from '../../constants';
import AppTextIcon from '../../components/AppTextIcon/AppTextIcon';

const RecipeScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const actionSheetRef = createRef();
  const [meal, setMeal] = useState({});
  const [ingredients, setIngredients] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <AppNotificationButton />,
    });
  }, [navigation]);

  useEffect(() => {
    const params = route.params;
    if (params && params.recipe) {
      const recipe = params.recipe;
      filterMeal(recipe.idMeal);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterMeal = id => {
    let tempIngredients = [];
    const ingredientsTempArr = IngredientsArr.meals;
    const mealsArr = LatestMealsArr.meals;
    const mealObj = mealsArr.find(item => item.idMeal === id);
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
            const resultData = ingredientsTempArr.find(
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
    console.log('onDirectionRef');
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
        <MealImage meal={meal} />
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
