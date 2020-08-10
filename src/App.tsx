import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../src/view/login/Login';
import { AuthContext } from './view/common/Auth';
import PrivateRoute from './PrivateRoute';
import SongsList from './view/pages/songs/songs-list/songs-list';
import Home from './view/home/Home';
import SignUp from './view/sign-up/sign-up';
import HotSongs from './view/pages/songs/hot-songs/hot-songs';
import NewsHome from './view/pages/news/index';
import LeetCode from './view/pages/leetcode/index';

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
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signUp" component={SignUp} />
                    <PrivateRoute path="/" Component={Home} />
                </Switch>
                <PrivateRoute path="/songs/list" Component={SongsList} />
                <PrivateRoute path="/songs/hot" Component={HotSongs} />

                <PrivateRoute path="/news" Component={NewsHome} />
                <PrivateRoute path="/leetcode" Component={LeetCode} />
            </Router>
        </AuthContext.Provider>
    );
};

export default App;
