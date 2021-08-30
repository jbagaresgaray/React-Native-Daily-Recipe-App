import {configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
import saga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: hardSet,
  },
  rootReducer,
);

const setupReduxFlipper = middlewares => {
  if (__DEV__) {
    const createDebugger = require('redux-flipper').default;
    middlewares.push(createDebugger());
  }

  return middlewares;
};

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return setupReduxFlipper([
      ...getDefaultMiddleware({
        serializableCheck: false,
        thunk: false,
      }).concat(sagaMiddleware),
    ]);
  },
});
sagaMiddleware.run(saga);

const persistor = persistStore(store);
export {store, persistor};
