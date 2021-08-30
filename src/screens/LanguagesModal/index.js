import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import {ListItem} from 'react-native-elements';
import {FlatList} from 'react-native-gesture-handler';
import AppButton from '../../components/AppButton/AppButton';
import AppSearchBar from '../../components/AppSearchBar/AppSearchBar';

import LanguagesArr from '../../constants/languages';
import {COLORS} from '../../styles/color';
import {FONT_PRIMARY_MEDIUM} from '../../styles/typography';
import AppStorage from '../../utils/Storage';
import {APP_LANGUAGE} from '../../constants';

const LanguageModalScreen = ({bottomSheetRef}) => {
  const [languages, setLanguages] = useState([]);
  const [language, setLanguage] = useState({});

  const applyLanguage = () => {
    bottomSheetRef.current.hide();
  };

  const renderItem = ({item}) => {
    return (
      <ListItem
        underlayColor={'transparent'}
        containerStyle={StyleSheet.flatten([
          styles.ListItemContainer,
          styles.ListItemContainerRounded,
        ])}
        onPress={() => onSelectLanguage(item)}>
        <ListItem.Content style={styles.ListItemContent}>
          <ListItem.Title style={styles.AppRecipeCardMeal} numberOfLines={1}>
            {item.name}
          </ListItem.Title>
        </ListItem.Content>
        {item.selected && (
          <ListItem.Chevron
            name="check-bold"
            type="material-community"
            size={24}
            color={COLORS.orange}
          />
        )}
      </ListItem>
    );
  };

  const onSelectLanguage = lang => {
    const tmpLanguagesArr = [...LanguagesArr];
    const selected = tmpLanguagesArr.find(item => item.code === lang.code);
    if (selected) {
      AppStorage.setItem(APP_LANGUAGE, selected);

      const newLanguagesArr = tmpLanguagesArr.map(item => {
        if (item.code === lang.code) {
          return {
            ...item,
            selected: true,
          };
        }

        return {
          ...item,
          selected: false,
        };
      });
      setLanguages(newLanguagesArr);
    }
  };

  useEffect(() => {
    const selected = AppStorage.getItem(APP_LANGUAGE);
    const tmpLanguagesArr = [...LanguagesArr];
    const newLanguagesArr = tmpLanguagesArr.map(item => {
      if (selected && item.code === selected.code) {
        return {
          ...item,
          selected: true,
        };
      }

      return {
        ...item,
        selected: false,
      };
    });
    setLanguages(newLanguagesArr);
    setLanguage(selected);
  }, []);

  return (
    <ActionSheet
      ref={bottomSheetRef}
      statusBarTranslucent
      nestedScrollEnabled
      headerAlwaysVisible
      bounceOnOpen
      gestureEnabled
      drawUnderStatusBar={false}
      containerStyle={styles.actionSheetContainer}>
      <View style={styles.searchBarContainer}>
        <AppSearchBar />
      </View>
      <FlatList
        data={languages}
        keyExtractor={(item, index) => 'key' + index}
        renderItem={renderItem}
        contentContainerStyle={styles.actionSheetContainer}
        nestedScrollEnabled
      />
      <View style={styles.buttonViews}>
        <AppButton title="Apply" onPress={applyLanguage} />
      </View>
    </ActionSheet>
  );
};

export default LanguageModalScreen;

const styles = StyleSheet.create({
  searchBarContainer: {
    paddingTop: 12,
    paddingStart: 12,
  },
  buttonViews: {
    paddingStart: 12,
    paddingEnd: 12,
    paddingTop: 12,
    paddingBottom: 40,
  },
  actionSheetContainer: {
    marginTop: 40,
    paddingVertical: 12,
    paddingHorizontal: 12,
    // minHeight: Dimensions.get('window').height - 300,
    // minHeight: 200,
    // height: 200,
  },
  ListItemContainerRounded: {
    borderRadius: 18,
  },
  ListItemContainer: {
    backgroundColor: COLORS.superLight,
    marginBottom: 6,
  },
  ListItemContent: {
    position: 'relative',
    paddingTop: 8,
    paddingBottom: 8,
  },
  AppRecipeCardMeal: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: FONT_PRIMARY_MEDIUM,
    color: COLORS.black,
    marginRight: 20,
  },
});
