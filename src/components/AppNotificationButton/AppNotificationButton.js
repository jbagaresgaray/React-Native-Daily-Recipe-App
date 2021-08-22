import React from 'react';
import {Button} from 'react-native-elements';

import NotificationSVG from '../../assets/svg/notifications.svg';

const AppNotificationButton = () => {
  return (
    <Button type="clear" icon={<NotificationSVG width={26} height={26} />} />
  );
};

export default AppNotificationButton;
