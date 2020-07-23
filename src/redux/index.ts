import { combineReducers, createStore, applyMiddleware } from 'redux';
import { userReducer } from './reducer/user';
import { songReducer } from './reducer/song';
import promiseMiddleware from 'redux-promise';
// import createLogger from 'redux-logger';

// const logger = createLogger('');

const allReducer = {
    user: userReducer,
    song: songReducer,
};
export const rootReducer = combineReducers(allReducer);
export const store = createStore(rootReducer, applyMiddleware(promiseMiddleware));
export type RootState = ReturnType<typeof rootReducer>;
export default store;
