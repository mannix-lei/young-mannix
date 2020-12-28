import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../src/view/login/Login';
import PrivateRoute from './PrivateRoute';
import { AuthContext } from './view/common/Auth';
import Home from './view/home/Home';
import History from './view/pages/history/history';
import LeetCode from './view/pages/leetcode/index';
import NewsHome from './view/pages/news/index';
import HotSongs from './view/pages/songs/hot-songs/hot-songs';
import SongsList from './view/pages/songs/songs-list/songs-list';
import Weather from './view/pages/weather/weather';
import SignUp from './view/sign-up/sign-up';

const App = () => {
    const existingTokens = JSON.parse(localStorage.getItem('tokens')!);
    const [authTokens, setAuthTokens] = useState(existingTokens);

    const setTokens = (data: object) => {
        localStorage.setItem('tokens', JSON.stringify(data));
        setAuthTokens(data);
    };
    return (
        <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
            <Router>
                <Switch>
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/signUp' component={SignUp} />
                    <PrivateRoute path='/' Component={Home} />
                </Switch>
                <PrivateRoute path='/songs/list' Component={SongsList} />
                <PrivateRoute path='/songs/hot' Component={HotSongs} />

                <PrivateRoute path='/news' Component={NewsHome} />
                <PrivateRoute path='/leetcode' Component={LeetCode} />
                <PrivateRoute path='/history' Component={History} />
                <PrivateRoute path='/weather' Component={Weather} />
            </Router>
        </AuthContext.Provider>
    );
};

export default App;
