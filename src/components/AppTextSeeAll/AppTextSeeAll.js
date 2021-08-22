import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {COLORS} from '../../styles/color';
import {FONT_PRIMARY_MEDIUM} from '../../styles/typography';

const AppTextSeeAll = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.textStyle}>See All</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 14,
    lineHeight: 19,
    fontFamily: FONT_PRIMARY_MEDIUM,
    color: COLORS.orange,
  },
});

export default AppTextSeeAll;
