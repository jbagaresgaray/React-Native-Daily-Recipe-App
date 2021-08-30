import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import {ListItem, Icon, Switch} from 'react-native-elements';

import AppTextSeeAll from '../../components/AppTextSeeAll/AppTextSeeAll';
import {COLORS} from '../../styles/color';
import {
  FONT_PRIMARY_EXTRA_BOLD,
  FONT_PRIMARY_MEDIUM,
} from '../../styles/typography';

const SettingsScreen = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.saferAreaView}>
        <ScrollView>
          <View style={styles.introContainer}>
            <Text style={styles.introCaption} numberOfLines={2}>
              Settings
            </Text>
          </View>
          <ListItem
            containerStyle={StyleSheet.flatten([
              styles.ListItemContainer,
              styles.ListItemContainerRounded,
            ])}>
            <Icon name="globe" type="feather" />
            <ListItem.Content style={styles.ListItemContent}>
              <ListItem.Title
                style={styles.AppRecipeCardMeal}
                numberOfLines={1}>
                Language
              </ListItem.Title>
            </ListItem.Content>
            <AppTextSeeAll label="English" />
          </ListItem>
          <View style={styles.borderLine} />
          <View style={styles.introContainer}>
            <Text style={styles.introSubCaption} numberOfLines={2}>
              Notifications
            </Text>
          </View>
          <ListItem
            containerStyle={StyleSheet.flatten([
              styles.ListItemContainer,
              styles.ListItemContainerFirst,
            ])}
            bottomDivider>
            <Icon name="bell" type="feather" />
            <ListItem.Content style={styles.ListItemContent}>
              <ListItem.Title
                style={styles.AppRecipeCardMeal}
                numberOfLines={1}>
                Push Notifications
              </ListItem.Title>
            </ListItem.Content>
            <Switch
              value={true}
              trackColor={{false: COLORS.fadeOrange, true: COLORS.fadeOrange}}
              thumbColor={COLORS.orange}
            />
          </ListItem>
          <ListItem
            containerStyle={StyleSheet.flatten([
              styles.ListItemContainer,
              styles.ListItemContainerLast,
            ])}>
            <Icon name="mail" type="feather" />
            <ListItem.Content style={styles.ListItemContent}>
              <ListItem.Title
                style={styles.AppRecipeCardMeal}
                numberOfLines={1}>
                Email Notifications
              </ListItem.Title>
            </ListItem.Content>
            <Switch
              value={false}
              trackColor={{false: COLORS.fadeOrange, true: COLORS.fadeOrange}}
              thumbColor={COLORS.orange}
            />
          </ListItem>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  saferAreaView: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingStart: 30,
    paddingEnd: 30,
  },
  introContainer: {
    paddingTop: 24,
    paddingBottom: 12,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  introCaption: {
    fontSize: 20,
    lineHeight: 28,
    color: COLORS.black,
    paddingTop: 3,
    paddingBottom: 3,
    fontFamily: FONT_PRIMARY_EXTRA_BOLD,
  },
  introSubCaption: {
    fontSize: 20,
    lineHeight: 28,
    color: COLORS.black,
    paddingBottom: 12,
    fontFamily: FONT_PRIMARY_MEDIUM,
  },
  borderLine: {
    height: 1,
    backgroundColor: COLORS.darkGrey,
    marginTop: 16,
  },
  ListItemContainerFirst: {
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  ListItemContainerLast: {
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },
  ListItemContainerRounded: {
    borderRadius: 18,
  },
  ListItemContainer: {
    backgroundColor: COLORS.superLight,
  },
  ListItemContent: {
    position: 'relative',
    paddingTop: 8,
    paddingBottom: 8,
  },
  AppRecipeCardMeal: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: FONT_PRIMARY_MEDIUM,
    color: COLORS.black,
    marginRight: 20,
  },
});
