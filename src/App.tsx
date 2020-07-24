import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../src/view/login/Login';
import { AuthContext } from './view/common/Auth';
import PrivateRoute from './PrivateRoute';
import SongsList from './view/pages/songs-list/songs-List';
import Home from './view/home/Home';
import SignUp from './view/sign-up/sign-up';
import HotSongs from './view/pages/hot-songs/hot-songs';
import TextFoo from './view/pages/test';

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
                <PrivateRoute path="/list" Component={SongsList} />
                <PrivateRoute path="/hot" Component={HotSongs} />
                <PrivateRoute path="/test" Component={TextFoo} />
            </Router>
        </AuthContext.Provider>
    );
};

export default App;
