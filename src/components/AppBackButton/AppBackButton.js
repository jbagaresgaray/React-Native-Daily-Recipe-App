import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Button, Icon} from 'react-native-elements';

const AppBackButton = () => {
  const navigation = useNavigation();
  return (
    <Button
      type="clear"
      icon={<Icon size={26} name="arrow-back" type="materialicon" />}
      onPress={() => navigation.goBack()}
    />
  );
};

export default AppBackButton;
