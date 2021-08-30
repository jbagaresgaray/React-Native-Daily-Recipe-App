import React, {useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useDispatch} from 'react-redux';

import landingImg from '../../assets/img/bg.png';

import AppButton from '../../components/AppButton/AppButton';
import AppHeaderLogo from '../../components/AppHeaderLogo/AppHeaderLogo';
import {COLORS} from '../../styles/color';
import {listsActions} from '../../stores/slices/listSlice';
import {mealsActions} from '../../stores/slices/mealsSlice';
import {generateRandomLetter} from '../../utils';

const LandingScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onSignIn = () => {
    navigation.navigate('Login');
  };

  const onSignUp = () => {
    navigation.navigate('Register');
  };

  const initAppData = () => {
    const randomRecipes = generateRandomLetter();
    const randomRecommended = generateRandomLetter();

    dispatch(listsActions.listAreaRequest());
    dispatch(listsActions.listCategoriesRequest());
    dispatch(listsActions.listIngredientsRequest());

    dispatch(mealsActions.todaysRecipeRequest(randomRecipes));
    dispatch(mealsActions.recommendedRequest(randomRecommended));
  };

  useEffect(() => {
    initAppData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            <AppButton title="Register" onPress={onSignUp} />
          </View>
          <View style={styles.haveAccountContainer}>
            <TouchableOpacity onPress={onSignIn}>
              <Text style={styles.loginButtonText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default LandingScreen;

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
    fontWeight: '500',
  },
});
