import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {COLORS} from '../../styles/color';

const AppButton = props => {
  return <Button {...props} buttonStyle={styles.buttonStyle} />;
};

export default AppButton;

const styles = StyleSheet.create({
  buttonStyle: {
    height: 50,
    borderRadius: 15,
    backgroundColor: COLORS.orange,
  },
});
