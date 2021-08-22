import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {COLORS} from '../../styles/color';
import {FONT_PRIMARY_BOLD} from '../../styles/typography';
import AppTextSeeAll from '../AppTextSeeAll/AppTextSeeAll';

const AppTextHeader = ({caption, onSeeAllPress}) => {
  return (
    <View style={styles.AppTextHeader}>
      <Text style={styles.textCaption}>{caption}</Text>
      <AppTextSeeAll onPress={onSeeAllPress} />
    </View>
  );
};

PropTypes.propTypes = {
  caption: PropTypes.string,
  onSeeAllPress: PropTypes.func,
};

const styles = StyleSheet.create({
  AppTextHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  textCaption: {
    fontSize: 18,
    lineHeight: 28,
    fontFamily: FONT_PRIMARY_BOLD,
    color: COLORS.black,
  },
});

export default AppTextHeader;
