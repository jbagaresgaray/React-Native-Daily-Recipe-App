import AsyncStorage from '@react-native-async-storage/async-storage';

const AppStorage = {
  async setItem(key, value) {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  },
  async removeItem(key) {
    await AsyncStorage.removeItem(key);
  },
  async getItem(key) {
    const value = await AsyncStorage.getItem(key);
    if (value && value !== null) {
      return JSON.parse(String(value.value));
    } else {
      return null;
    }
  },
  clearLocalStorage() {
    return AsyncStorage.clear();
  },
};

export default AppStorage;
