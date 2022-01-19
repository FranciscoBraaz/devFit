import {combineReducers, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userReducer from '../reducers/userReducer';

const reducer = combineReducers({user: userReducer});

const persistedReducer = persistReducer<any, any>(
  {
    key: 'root',
    storage: AsyncStorage,
  },
  reducer,
);

const store = createStore(persistedReducer);
let persistor = persistStore(store);

export {store, persistor};
