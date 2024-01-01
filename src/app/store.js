import { combineReducers, configureStore } from '@reduxjs/toolkit';
import orderReducer from '../features/order/orderSlice';
import authReducer from '../features/auth/authSlice';
import storage from 'redux-persist/lib/storage';
import { 
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

const reducers = combineReducers({
    order: orderReducer,
    auth: authReducer
});

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    })
});

export const persistor = persistStore(store);
export default store;
