import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ActionSheet from 'react-native-actions-sheet';
import AppButton from '../../components/AppButton/AppButton';

import AppTextSeeAll from '../../components/AppTextSeeAll/AppTextSeeAll';
import {COLORS} from '../../styles/color';
import {
  FONT_PRIMARY_BOLD,
  FONT_PRIMARY_EXTRA_BOLD,
} from '../../styles/typography';
import AppBadge from '../../components/AppBadge/AppBadge';

import MealArr from '../../api/fake/meal_type.json';
import CourseArr from '../../api/fake/categories.json';
import {AirbnbRating} from 'react-native-elements';

const FilterModalScreen = ({bottomSheetRef}) => {
  const MealsArr = MealArr.types;
  const CoursesArr = CourseArr.meals;

  const renderContent = () => {
    return (
      <View style={styles.saferAreaView}>
        <ScrollView nestedScrollEnabled>
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
          <View>
            <View style={styles.introContainer}>
              <Text style={styles.headerCaption}>Serving</Text>
              <AppTextSeeAll label="Set Manually" />
            </View>
          </View>
          <View>
            <View style={styles.introContainer}>
              <Text style={styles.headerCaption}>Preparation Time</Text>
              <AppTextSeeAll label="Set Manually" />
            </View>
          </View>
          <View>
            <View style={styles.introContainer}>
              <Text style={styles.headerCaption}>Calories</Text>
              <AppTextSeeAll label="Set Manually" />
            </View>
          </View>
          <View>
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
        </ScrollView>
        <View style={styles.buttonViews}>
          <AppButton title="Apply" />
        </View>
      </View>
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
    // flex: 1,
    paddingTop: 24,
    backgroundColor: COLORS.white,
    paddingStart: 20,
    paddingEnd: 20,
  },
  introContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
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
});
