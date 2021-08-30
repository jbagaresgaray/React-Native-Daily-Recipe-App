import React, {createRef} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Icon, Input} from 'react-native-elements';
import FilterModalScreen from '../../screens/FilterModal';
import {COLORS} from '../../styles/color';
import {FONT_PRIMARY_REGULAR} from '../../styles/typography';

const AppSearchBar = ({showFilter}) => {
  const bottomSheetRef = createRef();

  const onOpenFilter = () => {
    console.log('onOpenFilter');
    bottomSheetRef.current.setModalVisible();
  };

  return (
    <>
      <View style={styles.searchBarContainer}>
        <Input
          placeholder="Search for recipes"
          leftIcon={{type: 'evilicon', name: 'search', color: COLORS.lightGrey}}
          placeholderTextColor={COLORS.lightGrey}
          inputStyle={styles.searchInput}
          inputContainerStyle={styles.searchInputContainer}
          containerStyle={styles.searchContainer}
        />
        {showFilter && (
          <Button
            onPress={onOpenFilter}
            icon={
              <Icon
                name="options-outline"
                type="ionicon"
                size={21}
                color={COLORS.black}
              />
            }
            buttonStyle={styles.searchButtonStyle}
          />
        )}
      </View>
      <FilterModalScreen bottomSheetRef={bottomSheetRef} />
    </>
  );
};

export default AppSearchBar;

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  searchContainer: {
    marginLeft: 0,
    paddingStart: 0,
    // marginRight: 8,
    // width: 265,
  },
  searchInputContainer: {
    borderRadius: 8,
    borderBottomWidth: 0,
    backgroundColor: COLORS.superLight,
    height: 35,
    paddingStart: 8,
    // minWidth: 265,
    // width: 265,
  },
  searchInput: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: FONT_PRIMARY_REGULAR,
  },
  searchButtonContainer: {
    backgroundColor: 'green',
  },
  searchButtonStyle: {
    height: 35,
    backgroundColor: COLORS.superLight,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: COLORS.superLight,
  },
});
