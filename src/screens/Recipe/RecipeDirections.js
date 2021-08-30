import React, {useCallback, useMemo, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import BottomSheet from '@gorhom/bottom-sheet';
import Animated from 'react-native-reanimated';

import {FONT_PRIMARY_REGULAR} from '../../styles/typography';
import {COLORS} from '../../styles/color';
import RecipeItem from './RecipeItem';
import RecipeIngredients from './RecipeIngredients';

const RecipeDirections = ({meal, recipeRef, ingredients}) => {
  const [showMealItem, setShowMealItem] = useState(false);
  const snapPoints = useMemo(() => ['25%', '35%', '90%'], []);

  const handleSheetChanges = useCallback(index => {
    if (index > 1) {
      setShowMealItem(true);
    } else {
      setShowMealItem(false);
    }
  }, []);

  return (
    <BottomSheet
      ref={recipeRef}
      index={1}
      enablePanDownToClose={false}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      style={styles.bottomSheet}>
      <ScrollView
        contentContainerStyle={styles.actionSheetContainer}
        nestedScrollEnabled>
        {showMealItem && (
          <Animated.View>
            <RecipeItem
              meal={meal.strMeal}
              category={meal.strCategory}
              area={meal.strArea}
              image={meal.strMealThumb}
            />
            <View style={styles.borderLine} />
            <RecipeIngredients ingredients={ingredients} isBottomSheet />
            <View style={styles.borderLine} />
          </Animated.View>
        )}
        <Text style={styles.formatText}>{meal.strInstructions}</Text>
      </ScrollView>
    </BottomSheet>
  );
};

export default RecipeDirections;

const styles = StyleSheet.create({
  bottomSheet: {
    // borderRadius: 16,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
  bottomSheetBackgroundStyle: {
    zIndex: 12,
  },
  actionSheetContainer: {
    paddingVertical: 25,
    paddingHorizontal: 24,
    // minHeight: Dimensions.get('window').height - 300,
    // minHeight: 200,
    // height: 200,
  },
  formatText: {
    fontSize: 12,
    fontFamily: FONT_PRIMARY_REGULAR,
    lineHeight: 20,
    letterSpacing: 0.2,
    color: COLORS.black,
    textAlign: 'center',
  },
  borderLine: {
    height: 1,
    backgroundColor: COLORS.sliderUnselect,
    marginTop: 16,
    marginBottom: 16,
  },
});
