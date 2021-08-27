import React from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import FastImage from 'react-native-fast-image';
import {COLORS} from '../../styles/color';
import {FONT_PRIMARY_BOLD} from '../../styles/typography';

const RecipeIngredients = ({ingredients}) => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.ImageContainer}>
        <FastImage
          style={styles.Image}
          source={{
            uri: item.url,
          }}
          resizeMode={FastImage.resizeMode.cover}
          onError={e => {
            console.log('FastImage error: ', e);
          }}
        />
        {/* <Image
          style={styles.Image}
          source={{
            uri: item.url,
          }}
          resizeMode="cover"
        /> */}
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
  },
  Image: {
    height: 60,
    width: 60,
    borderRadius: 10,
    padding: 6,
  },
});
