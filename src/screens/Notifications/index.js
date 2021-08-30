import React, {useLayoutEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';
import {ListItem} from 'react-native-elements';
import AppSearchBar from '../../components/AppSearchBar/AppSearchBar';
import AppTextSeeAll from '../../components/AppTextSeeAll/AppTextSeeAll';
import {COLORS} from '../../styles/color';
import {
  FONT_PRIMARY_BOLD,
  FONT_PRIMARY_MEDIUM,
  FONT_PRIMARY_REGULAR,
  FONT_PRIMARY_SEMI_BOLD,
} from '../../styles/typography';

import NotificationsArr from '../../api/fake/notifications.json';
import {useNavigation} from '@react-navigation/core';
import AppBackButton from '../../components/AppBackButton/AppBackButton';

const NotificationsScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <AppBackButton />,
    });
  }, [navigation]);

  const renderItem = ({item}) => {
    return (
      <ListItem
        containerStyle={StyleSheet.flatten([
          styles.ListItemContainer,
          !item.read ? styles.ListItemContainerUnRead : null,
        ])}>
        <ListItem.Content>
          <View>
            <ListItem.Title style={styles.textDate}>{item.date}</ListItem.Title>
            <ListItem.Title
              style={item.read ? styles.textTitle : styles.textTitleUnread}>
              {item.title}
            </ListItem.Title>
          </View>
          <ListItem.Subtitle style={styles.textBody}>
            {item.body}
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.saferAreaView}>
        <View style={styles.introContainer}>
          <Text style={styles.introCaption} numberOfLines={2}>
            Notifications
          </Text>
          <AppTextSeeAll label="Mark All As Read" />
        </View>
        <View style={styles.searchBarContainer}>
          <AppSearchBar />
        </View>
        <FlatList
          data={NotificationsArr.notifications}
          renderItem={renderItem}
          keyExtractor={(item, index) => 'key' + index}
        />
      </SafeAreaView>
    </>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  saferAreaView: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingStart: 20,
    paddingEnd: 20,
  },
  introContainer: {
    paddingTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  introCaption: {
    fontSize: 20,
    lineHeight: 28,
    color: COLORS.black,
    paddingTop: 3,
    paddingBottom: 3,
    fontFamily: FONT_PRIMARY_BOLD,
  },
  searchBarContainer: {
    paddingTop: 12,
    width: Dimensions.get('window').width - 100,
  },
  ListItemContainer: {
    borderRadius: 18,
    backgroundColor: COLORS.superLight,
    marginTop: 6,
    marginBottom: 6,
  },
  ListItemContainerUnRead: {
    borderLeftWidth: 8,
    borderLeftColor: COLORS.orange,
    borderColor: COLORS.orange,
  },
  ListItemTitle: {
    flexDirection: 'column',
  },
  textDate: {
    fontSize: 8,
    lineHeight: 9,
    fontFamily: FONT_PRIMARY_SEMI_BOLD,
    color: COLORS.blueShade,
  },
  textTitle: {
    fontSize: 12,
    lineHeight: 18,
    fontFamily: FONT_PRIMARY_MEDIUM,
    color: COLORS.black,
  },
  textTitleUnread: {
    fontSize: 12,
    lineHeight: 18,
    fontFamily: FONT_PRIMARY_MEDIUM,
    color: COLORS.orange,
  },
  textBody: {
    fontSize: 10,
    lineHeight: 18,
    fontFamily: FONT_PRIMARY_REGULAR,
    color: COLORS.notificationText,
  },
});
