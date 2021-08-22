import React from 'react';
import {Button} from 'react-native-elements';

import MenuSVG from '../../assets/svg/menu.svg';

const AppMenuButton = () => {
  return <Button type="clear" icon={<MenuSVG width={26} height={26} />} />;
};

export default AppMenuButton;
