import React, {useCallback, useMemo, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import Animated, {
  useAnimatedStyle,
  interpolateColor,
} from 'react-native-reanimated';

import {FONT_PRIMARY_REGULAR} from '../../styles/typography';
import {COLORS} from '../../styles/color';
import RecipeItem from './RecipeItem';

const RecipeDirections = ({meal, recipeRef}) => {
  const [showMealItem, setShowMealItem] = useState(false);
  const snapPoints = useMemo(() => ['25%', '35%', '90%'], []);

  const handleSheetChanges = useCallback(index => {
    if (index > 1) {
      setShowMealItem(true);
    } else {
      setShowMealItem(false);
    }
  }, []);

  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        enableTouchThrough={true}
        disappearsOnIndex={1}
        appearsOnIndex={2}
        closeOnPress={false}
      />
    ),
    [],
  );

  return (
    <BottomSheet
      ref={recipeRef}
      index={1}
      enablePanDownToClose={false}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
      onChange={handleSheetChanges}
      style={styles.bottomSheet}>
      <BottomSheetScrollView
        contentContainerStyle={styles.actionSheetContainer}>
        {showMealItem && (
          <Animated.View pointerEvents="none">
            <RecipeItem
              meal={meal.strMeal}
              category={meal.strCategory}
              area={meal.strArea}
              image={meal.strMealThumb}
            />
            <View style={styles.borderLine} />
          </Animated.View>
        )}
        <Text style={styles.formatText}>{meal.strInstructions}</Text>
      </BottomSheetScrollView>
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
