import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Button} from 'react-native-elements';

import NotificationSVG from '../../assets/svg/notifications.svg';

const AppNotificationButton = () => {
  const navigation = useNavigation();

  return (
    <Button
      type="clear"
      icon={<NotificationSVG width={26} height={26} />}
      onPress={() => navigation.navigate('Notification')}
    />
  );
};

export default AppNotificationButton;
