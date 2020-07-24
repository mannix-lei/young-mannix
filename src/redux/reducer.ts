import { combineReducers } from 'redux';
// import { userReducer } from './reducer/user';
import { testReducer } from './reducer/test';
import { songReducer } from './reducer/song';

const allReducer = {
    // user: userReducer,
    song: songReducer,
    test: testReducer,
};
const rootReducer = combineReducers(allReducer);
export default rootReducer;
