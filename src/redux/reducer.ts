import { newsReducer } from './reducer/news';
import { combineReducers } from 'redux';
// import { userReducer } from './reducer/user';
import { testReducer } from './reducer/test';
import { songReducer } from './reducer/song';
import { cityReducer } from './reducer/city';
import { loadingReducer } from './reducer/loading';

const allReducer = {
    // user: userReducer,
    song: songReducer,
    test: testReducer,
    city: cityReducer,
    news: newsReducer,
    loading: loadingReducer,
};
const rootReducer = combineReducers(allReducer);
export default rootReducer;
