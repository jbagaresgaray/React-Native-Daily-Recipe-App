import React from 'react';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles/color';

const AppSlider = props => {
  return (
    <MultiSlider
      showSteps
      isMarkersSeparated
      enableLabel
      containerStyle={styles.containerStyle}
      markerStyle={styles.markerStyle}
      markerContainerStyle={styles.markerContainerStyle}
      selectedStyle={styles.selectedStyle}
      unselectedStyle={styles.unselectedStyle}
      trackStyle={styles.trackStyle}
      allowOverlap={false}
      markerOffsetY={12}
      {...props}
    />
  );
};

export default AppSlider;

const styles = StyleSheet.create({
  containerStyle: {
    // backgroundColor: 'blue',
    paddingStart: 20,
    paddingEnd: 20,
  },
  markerStyle: {
    height: 12,
    width: 12,
    backgroundColor: COLORS.orange,
  },
  markerContainerStyle: {
    // top: -12,
    height: 24,
    width: 24,
    backgroundColor: COLORS.fadeOrange,
    borderRadius: 999,
  },
  selectedStyle: {
    backgroundColor: COLORS.orange,
  },
  unselectedStyle: {
    backgroundColor: COLORS.sliderUnselect,
  },
  trackStyle: {},
});
