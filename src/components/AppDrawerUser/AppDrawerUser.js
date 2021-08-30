import React from 'react';
import {StyleSheet} from 'react-native';
import {Avatar, ListItem} from 'react-native-elements';
import UserImg from '../../assets/img/user.png';
import {COLORS} from '../../styles/color';
import {
  FONT_PRIMARY_MEDIUM,
  FONT_PRIMARY_SEMI_BOLD,
} from '../../styles/typography';

export default function AppDrawerUser() {
  return (
    <ListItem>
      <Avatar source={UserImg} containerStyle={styles.Avatar} />
      <ListItem.Content>
        <ListItem.Title style={styles.Username}>Emma Holmes</ListItem.Title>
        <ListItem.Subtitle style={styles.ViewProfile}>
          View Profile
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
}

const styles = StyleSheet.create({
  Avatar: {
    height: 60,
    width: 60,
  },
  Username: {
    fontSize: 16,
    lineHeight: 28,
    fontFamily: FONT_PRIMARY_SEMI_BOLD,
    color: COLORS.black,
  },
  ViewProfile: {
    fontSize: 12,
    lineHeight: 14,
    fontFamily: FONT_PRIMARY_MEDIUM,
    color: COLORS.lightGrey,
    paddingTop: 6,
  },
});
