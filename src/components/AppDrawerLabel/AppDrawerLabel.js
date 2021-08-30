import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {COLORS} from '../../styles/color';
import {
  FONT_PRIMARY_REGULAR,
  FONT_PRIMARY_SEMI_BOLD,
} from '../../styles/typography';

const AppDrawerLabel = ({label, focused}) => {
  return focused ? (
    <Text style={styles.fontFocused}>{label}</Text>
  ) : (
    <Text style={styles.fontNormal}>{label}</Text>
  );
};

export default AppDrawerLabel;

const styles = StyleSheet.create({
  fontFocused: {
    fontSize: 14,
    lineHeight: 28,
    fontFamily: FONT_PRIMARY_SEMI_BOLD,
    color: COLORS.orange,
  },
  fontNormal: {
    fontSize: 14,
    lineHeight: 28,
    fontFamily: FONT_PRIMARY_REGULAR,
    color: COLORS.lightGrey,
  },
});
