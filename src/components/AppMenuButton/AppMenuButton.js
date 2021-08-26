import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Button} from 'react-native-elements';

import MenuSVG from '../../assets/svg/menu.svg';

const AppMenuButton = () => {
  const navigation = useNavigation();
  return (
    <Button
      type="clear"
      icon={<MenuSVG width={26} height={26} />}
      onPress={() => navigation.toggleDrawer()}
    />
  );
};

export default AppMenuButton;
