import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
// import { routerMiddleware } from 'connected-react-router';
// import history from '@/utils/history';
import {combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import authReducer from '@/features/Auth/authSlice';
import messageReducer from '@/features/Messages/messageSlice';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import history from '@/utils/history';

//Lib to config Redux-persist (Duy trì trạng thái của state khi load lại trang)
import { 
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';


//Combine all reducesr into one rootReducers
const rootReducer = combineReducers({ 
    auth: authReducer,
    router: connectRouter(history),
    message: messageReducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'message'], //Danh sách duy trì state
    stateReconciler: autoMergeLevel2,
  }

const persistedReducer = persistReducer(persistConfig, rootReducer)


// Create the store with middlewares
// 1. sagaMiddleware: Makes redux-sagas work
// 2. routerMiddleware: Syncs the location/URL path to the state

const sagaMiddleware = createSagaMiddleware()
// const routerHistoryMiddleware = routerMiddleware(history)

export const store = configureStore({
    reducer: persistedReducer,
    // devTools: false,
    middleware: (getDefaultMiddle) => {
        return getDefaultMiddle({
            serializableCheck: {
              ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
          }).concat(sagaMiddleware).concat(routerMiddleware(history))
    },
});

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;