import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import AppTextHeader from '../../components/AppTextHeader/AppTextHeader';

const Recommended = () => {
  return (
    <View style={styles.RecommendedContainer}>
      <AppTextHeader caption="Recommended" />
      <FlatList />
    </View>
  );
};

const styles = StyleSheet.create({
  RecommendedContainer: {},
});

export default Recommended;
