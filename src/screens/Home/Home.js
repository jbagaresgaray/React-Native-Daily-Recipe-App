import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import landingImg from '../../assets/img/bg.png';
import AppButton from '../../components/AppButton/AppButton';
import AppHeaderLogo from '../../components/AppHeaderLogo/AppHeaderLogo';
import {COLORS} from '../../styles/color';

const HomeScreen = () => {
  return (
    <ImageBackground source={landingImg} style={styles.bgImage}>
      <SafeAreaView />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.contentContainer}>
          <AppHeaderLogo />
          <Text style={styles.logoText}>Cooking Done The Easy Way</Text>
        </View>
        <View style={styles.footerContainer}>
          <View style={styles.buttonViews}>
            <AppButton title="Sign In" />
          </View>
          <View style={styles.haveAccountContainer}>
            <TouchableOpacity>
              <Text style={styles.loginButtonText}>
                Don't have an account? Register.
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  bgImage: {
    width: '100%',
    height: '100%',
  },
  scrollView: {
    flex: 1,
    paddingStart: 24,
    paddingEnd: 24,
  },
  contentContainer: {
    flex: 1,
    paddingTop: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    marginTop: 14,
    color: COLORS.lightGrey,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '400',
  },
  footerContainer: {
    marginBottom: 32,
    paddingStart: 16,
    paddingEnd: 16,
  },
  haveAccountContainer: {
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginButtonText: {
    paddingLeft: 6,
    fontSize: 16,
    color: COLORS.white,
    fontWeight: '500',
  },
});
