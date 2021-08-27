import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ActionSheet from 'react-native-actions-sheet';
import {AirbnbRating} from 'react-native-elements';
import AppButton from '../../components/AppButton/AppButton';
import AppSlider from '../../components/AppSlider/AppSlider';
import AppTextSeeAll from '../../components/AppTextSeeAll/AppTextSeeAll';
import AppBadge from '../../components/AppBadge/AppBadge';

import {COLORS} from '../../styles/color';
import {
  FONT_PRIMARY_BOLD,
  FONT_PRIMARY_EXTRA_BOLD,
} from '../../styles/typography';

import MealArr from '../../api/fake/meal_type.json';
import CourseArr from '../../api/fake/categories.json';

const FilterModalScreen = ({bottomSheetRef}) => {
  const MealsArr = MealArr.types;
  const CoursesArr = CourseArr.meals;
  const SliderWidth = Dimensions.get('window').width - 60;

  const applyFilter = () => {
    bottomSheetRef.current.hide();
  };

  const renderContent = () => {
    return (
      <ScrollView
        nestedScrollEnabled
        contentContainerStyle={styles.saferAreaView}>
        <View style={styles.introContainer}>
          <Text style={styles.introCaption} numberOfLines={2}>
            Filter
          </Text>
          <AppTextSeeAll label="Reset" />
        </View>
        <View>
          <Text style={styles.headerCaption}>Meal</Text>
          <View style={styles.badgeContainer}>
            {MealsArr &&
              MealsArr.map((item, index) => {
                return <AppBadge label={item.strType} key={index} />;
              })}
          </View>
        </View>
        <View style={styles.borderLine} />
        <View>
          <Text style={styles.headerCaption}>Course</Text>
          <View style={styles.badgeContainer}>
            {CoursesArr &&
              CoursesArr.map((item, index) => {
                return <AppBadge label={item.strCategory} key={index} />;
              })}
          </View>
        </View>
        <View style={styles.borderLine} />
        <View style={styles.sliderContainer}>
          <View style={styles.introContainer}>
            <Text style={styles.headerCaption}>Serving</Text>
            <AppTextSeeAll label="Set Manually" />
          </View>
          <AppSlider
            showStepLabels
            isMarkersSeparated
            values={[2, 4]}
            max={10}
            sliderLength={SliderWidth}
          />
        </View>
        <View style={styles.sliderContainer}>
          <View style={styles.introContainer}>
            <Text style={styles.headerCaption}>Preparation Time</Text>
            <AppTextSeeAll label="Set Manually" />
          </View>
          <AppSlider
            showStepLabels
            isMarkersSeparated
            valueSuffix="mins"
            values={[5, 20]}
            max={60}
            sliderLength={SliderWidth}
          />
        </View>
        <View style={styles.sliderContainer}>
          <View style={styles.introContainer}>
            <Text style={styles.headerCaption}>Calories</Text>
            <AppTextSeeAll label="Set Manually" />
          </View>
          <AppSlider
            showSteps
            isMarkersSeparated
            values={[0, 500]}
            max={2000}
            valueSuffix="cal"
            sliderLength={SliderWidth}
          />
        </View>
        <View style={styles.ratingContainer}>
          <View style={styles.introContainer}>
            <Text style={styles.headerCaption}>Rating</Text>
          </View>
          <AirbnbRating
            showRating={false}
            defaultRating={3}
            count={5}
            size={20}
            selectedColor={COLORS.orange}
            unSelectedColor={COLORS.lightGrey}
          />
        </View>
        <View style={styles.buttonViews}>
          <AppButton title="Apply" onPress={applyFilter} />
        </View>
      </ScrollView>
    );
  };

  return (
    <ActionSheet
      ref={bottomSheetRef}
      statusBarTranslucent
      nestedScrollEnabled
      headerAlwaysVisible
      bounceOnOpen
      gestureEnabled
      drawUnderStatusBar={false}
      containerStyle={styles.innerContainer}>
      {renderContent()}
    </ActionSheet>
  );
};

export default FilterModalScreen;

const styles = StyleSheet.create({
  saferAreaView: {
    paddingStart: 20,
    paddingEnd: 20,
    paddingVertical: 25,
  },
  introContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 18,
  },
  introCaption: {
    fontSize: 20,
    lineHeight: 28,
    color: COLORS.black,
    paddingTop: 3,
    paddingBottom: 3,
    fontFamily: FONT_PRIMARY_EXTRA_BOLD,
  },
  borderLine: {
    height: 1,
    backgroundColor: COLORS.superLight,
    marginTop: 16,
    marginBottom: 16,
  },
  innerContainer: {
    // paddingTop: 32,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    // height: 200,
    // paddingBottom: 24,
  },
  headerCaption: {
    fontSize: 14,
    lineHeight: 28,
    letterSpacing: 0.2,
    color: COLORS.black,
    fontFamily: FONT_PRIMARY_BOLD,
  },
  badgeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  ratingContainer: {
    alignItems: 'flex-start',
    paddingBottom: 24,
  },
  sliderContainer: {
    // paddingStart: 20,
    // paddingEnd: 20,
  },
});
