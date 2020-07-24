import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import rootReducer from './reducer';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk, promiseMiddleware));
export type RootState = ReturnType<typeof rootReducer>;
export default store;
