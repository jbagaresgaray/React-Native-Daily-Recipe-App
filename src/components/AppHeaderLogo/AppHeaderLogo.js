import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';

import AppLogo from '../../assets/img/mask.png';
import {COLORS} from '../../styles/color';

const AppHeaderLogo = () => {
  return (
    <View style={styles.logoContainer}>
      <View style={styles.roundCircle} />
      <Image source={AppLogo} style={styles.maskImage} />
      <Text style={styles.logoText}>Daily Recipe</Text>
    </View>
  );
};

export default AppHeaderLogo;

const styles = StyleSheet.create({
  logoContainer: {
    position: 'relative',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  roundCircle: {
    height: 111,
    width: 111,
    backgroundColor: 'rgba(255,255,255,0.4)',
    borderRadius: 999,
  },
  maskImage: {
    position: 'absolute',
    top: 9,
    zIndex: 1,
  },
  logoText: {
    position: 'absolute',
    bottom: 15,
    zIndex: 2,
    fontSize: 40,
    color: COLORS.white,
    textAlign: 'center',
  },
});
