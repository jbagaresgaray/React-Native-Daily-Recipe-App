import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import FastImage from 'react-native-fast-image';
import {FlatList} from 'react-native-gesture-handler';
import {COLORS} from '../../styles/color';
import {FONT_PRIMARY_BOLD} from '../../styles/typography';

const RecipeIngredients = ({ingredients, isBottomSheet}) => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.ImageContainer} activeOpacity={0.6}>
        <FastImage
          style={styles.Image}
          source={{
            uri: item.url,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Ingredients</Text>
      <FlatList
        horizontal
        data={ingredients}
        renderItem={renderItem}
        keyExtractor={(item, index) => 'key' + index}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

RecipeIngredients.propTypes = {
  ingredients: PropTypes.array,
};

RecipeIngredients.defaultProps = {
  ingredients: [],
};

export default RecipeIngredients;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  textHeader: {
    fontSize: 14,
    lineHeight: 28,
    color: COLORS.black,
    fontFamily: FONT_PRIMARY_BOLD,
  },
  ImageContainer: {
    height: 60,
    width: 60,
    borderRadius: 10,
    margin: 6,
    backgroundColor: COLORS.white,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    height: 50,
    width: 50,
  },
});
