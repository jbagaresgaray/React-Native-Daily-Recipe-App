import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {Input, Icon} from 'react-native-elements';

import landingImg from '../../assets/img/bg.png';
import AppButton from '../../components/AppButton/AppButton';
import AppHeaderLogo from '../../components/AppHeaderLogo/AppHeaderLogo';
import {COLORS} from '../../styles/color';

const LoginScreen = () => {
  const navigation = useNavigation();

  const onSignUp = () => {
    navigation.navigate('Register');
  };

  const onSignIn = () => {
    navigation.navigate('Main');
  };

  return (
    <ImageBackground source={landingImg} style={styles.bgImage}>
      <SafeAreaView />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.contentContainer}>
          <AppHeaderLogo />
          <Text style={styles.logoText}>Sign In</Text>
          <KeyboardAvoidingView style={styles.formControl}>
            <Input
              placeholder="Email Address"
              placeholderTextColor={COLORS.lightGrey}
              inputStyle={styles.formInput}
              leftIcon={
                <Icon
                  name="mail"
                  type="feather"
                  size={21}
                  color={COLORS.lightGrey}
                />
              }
            />
            <Input
              placeholder="Password"
              placeholderTextColor={COLORS.lightGrey}
              secureTextEntry
              inputStyle={styles.formInput}
              leftIcon={
                <Icon
                  name="lock"
                  type="feather"
                  size={21}
                  color={COLORS.lightGrey}
                />
              }
              rightIcon={
                <Icon
                  name="eye"
                  type="feather"
                  size={21}
                  color={COLORS.lightGrey}
                />
              }
            />
            <TouchableOpacity style={styles.forgotView}>
              <Text style={styles.forgotButtonText}>Forgot Password?</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
        <View style={styles.footerContainer}>
          <View style={styles.buttonViews}>
            <AppButton title="Sign In" onPress={onSignIn} />
          </View>
          <View style={styles.haveAccountContainer}>
            <Text style={styles.loginButtonText}>Don't have an account?</Text>
            <TouchableOpacity onPress={onSignUp}>
              <Text style={styles.registerButtonText}>Register.</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default LoginScreen;

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
    // alignItems: 'center',
  },
  logoText: {
    marginTop: 32,
    color: COLORS.white,
    fontSize: 18,
    lineHeight: 28,
    fontWeight: '700',
    textAlign: 'center',
  },
  formControl: {
    marginTop: 32,
  },
  formInput: {
    fontSize: 14,
    color: COLORS.lightGrey,
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
    fontWeight: '400',
  },
  registerButtonText: {
    paddingLeft: 6,
    fontSize: 16,
    color: COLORS.orange,
    fontWeight: '400',
  },
  forgotButtonText: {
    fontSize: 12,
    lineHeight: 18,
    color: COLORS.blueShade,
    fontWeight: '400',
  },
  forgotView: {
    alignItems: 'flex-end',
  },
});
