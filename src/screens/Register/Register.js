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

const RegisterScreen = () => {
  const navigation = useNavigation();

  const onSignIn = () => {
    navigation.navigate('Login');
  };

  return (
    <ImageBackground source={landingImg} style={styles.bgImage}>
      <SafeAreaView />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.contentContainer}>
          <AppHeaderLogo />
          <Text style={styles.logoText}>Register</Text>
          <KeyboardAvoidingView style={styles.formControl}>
            <Input
              placeholder="Full Name "
              placeholderTextColor={COLORS.lightGrey}
              inputStyle={styles.formInput}
              leftIcon={
                <Icon
                  name="user-o"
                  type="font-awesome"
                  size={21}
                  color={COLORS.lightGrey}
                />
              }
            />
            <Input
              placeholder="Email Address"
              keyboardType="email-address"
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
          </KeyboardAvoidingView>
        </View>
        <View style={styles.footerContainer}>
          <View style={styles.buttonViews}>
            <AppButton title="Register" />
          </View>
          <View style={styles.haveAccountContainer}>
            <Text style={styles.loginButtonText}>Already registered?</Text>
            <TouchableOpacity onPress={onSignIn}>
              <Text style={styles.registerButtonText}>Sign in.</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default RegisterScreen;

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
    marginBottom: 64,
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
});
