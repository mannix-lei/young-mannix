import { songReducer } from './modules/songs';
import { combineReducers } from 'redux';
import { userReducer } from './modules/user';

export const rootReducer = combineReducers({ user: userReducer, song: songReducer });
export type RootState = ReturnType<typeof rootReducer>;
