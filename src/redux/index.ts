import { songReducer } from './modules/songs';
import { combineReducers } from 'redux';
import { userReducer } from './modules/user';
import { songFormReducer} from './modules/song-form';

export const rootReducer = combineReducers({ user: userReducer, song: songReducer, songForm: songFormReducer });
export type RootState = ReturnType<typeof rootReducer>;
