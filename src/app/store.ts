import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
// import { routerMiddleware } from 'connected-react-router';
// import history from '@/utils/history';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga'
import authReducer from '@/features/Auth/authSlice';

// Create the store with middlewares
// 1. sagaMiddleware: Makes redux-sagas work
// 2. routerMiddleware: Syncs the location/URL path to the state

const sagaMiddleware = createSagaMiddleware()
// const routerHistoryMiddleware = routerMiddleware(history)

export const store = configureStore({
    reducer: {
        auth: authReducer
    },
    devTools: true,
    middleware: (getDefaultMiddle) => {
        return getDefaultMiddle().concat(sagaMiddleware)
    },
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;