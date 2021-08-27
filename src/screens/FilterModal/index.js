import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ActionSheet from 'react-native-actions-sheet';
import AppButton from '../../components/AppButton/AppButton';

import AppTextSeeAll from '../../components/AppTextSeeAll/AppTextSeeAll';
import {COLORS} from '../../styles/color';
import {FONT_PRIMARY_EXTRA_BOLD} from '../../styles/typography';

const FilterModalScreen = ({bottomSheetRef}) => {
  const renderContent = () => {
    return (
      <View style={styles.saferAreaView}>
        <ScrollView>
          <View style={styles.introContainer}>
            <Text style={styles.introCaption} numberOfLines={2}>
              Filter
            </Text>
            <AppTextSeeAll label="Reset" />
          </View>
          <View style={styles.borderLine} />
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
});
