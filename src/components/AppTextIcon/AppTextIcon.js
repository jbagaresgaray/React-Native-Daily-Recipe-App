import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../styles/color';
import {FONT_PRIMARY_REGULAR} from '../../styles/typography';

const AppTextIcon = ({label, icon, size, textStyle}) => {
  return (
    <View style={styles.container}>
      <Icon name={icon} size={size} color={COLORS.lightGrey} />
      <Text style={StyleSheet.flatten([styles.textStyle, textStyle])}>
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 10,
    lineHeight: 11,
    fontFamily: FONT_PRIMARY_REGULAR,
    color: COLORS.lightGrey,
    paddingStart: 4,
  },
});

export default AppTextIcon;
