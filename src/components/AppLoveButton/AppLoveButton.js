import React from 'react';
import {Button, Icon} from 'react-native-elements';
import PropTypes from 'prop-types';
import {COLORS} from '../../styles/color';

const AppLoveButton = ({selected, size}) => {
  return (
    <Button
      type="clear"
      icon={
        selected ? (
          <Icon
            name="heart"
            size={size === undefined ? 18 : size}
            color={COLORS.orange}
            type="ionicon"
          />
        ) : (
          <Icon
            name="heart-outline"
            size={size === undefined ? 18 : size}
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
