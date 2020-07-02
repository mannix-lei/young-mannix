import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from '../src/view/login/Login';
import Header from '../src/view/common/header/Header';

function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/login" component={Login}></Route>
            </Switch>
        </Router>
    );
}

export default App;
