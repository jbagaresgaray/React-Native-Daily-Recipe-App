import React from 'react';
import {Button, Icon} from 'react-native-elements';
import PropTypes from 'prop-types';
import {COLORS} from '../../styles/color';

const AppLoveButton = ({selected}) => {
  return (
    <Button
      type="clear"
      icon={
        selected ? (
          <Icon name="heart" size={18} color={COLORS.orange} type="ionicon" />
        ) : (
          <Icon
            name="heart-outline"
            size={18}
            color={COLORS.lightGrey}
            type="ionicon"
          />
        )
      }
    />
  );
};

AppLoveButton.propTypes = {
  selected: PropTypes.bool,
};

AppLoveButton.defaultProps = {
  selected: false,
};

export default AppLoveButton;
