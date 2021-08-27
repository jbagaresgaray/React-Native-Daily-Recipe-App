import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS} from '../../styles/color';
import {FONT_PRIMARY_MEDIUM} from '../../styles/typography';

const AppBadge = ({label, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.badgeContainer}>
      <Text style={styles.badgeText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default AppBadge;

const styles = StyleSheet.create({
  badgeContainer: {
    backgroundColor: COLORS.badge,
    minWidth: 88,
    borderRadius: 8,
    margin: 6,
  },
  badgeText: {
    fontSize: 12,
    lineHeight: 18,
    fontFamily: FONT_PRIMARY_MEDIUM,
    textAlign: 'center',
    paddingTop: 8,
    paddingBottom: 8,
    paddingStart: 18,
    paddingEnd: 18,
  },
});
