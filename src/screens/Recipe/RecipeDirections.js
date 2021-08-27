import React from 'react';
import {Dimensions, ScrollView, StyleSheet, Text} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';

const RecipeDirections = ({directions, recipeRef}) => {
  return (
    <ActionSheet
      ref={recipeRef}
      closable={false}
      closeOnPressBack={false}
      keyboardDismissMode="none"
      gestureEnabled
      nestedScrollEnabled
      drawUnderStatusBar={true}
      defaultOverlayOpacity={0}
      containerStyle={styles.actionSheetContainer}>
      <ScrollView nestedScrollEnabled>
        <Text>{directions}</Text>
      </ScrollView>
    </ActionSheet>
  );
};

export default RecipeDirections;

const styles = StyleSheet.create({
  actionSheetContainer: {
    paddingVertical: 25,
    paddingHorizontal: 24,
    // minHeight: Dimensions.get('window').height - 300,
    minHeight: 200,
    // height: 200,
  },
});
