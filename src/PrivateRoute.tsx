import React from 'react';
import { Route, RouteComponentProps, Redirect } from 'react-router-dom';
import { useAuth } from './view/common/header/Auth';

interface Props {
    Component: React.FC<RouteComponentProps>;
    path: string;
    exact?: boolean;
}
const PrivateRoute = ({ Component, ...rest }: Props) => {
    const { authTokens } = useAuth();
    return <Route {...rest} render={(props) => authTokens ? <Component {...props} /> : <Redirect to={{ pathname: '/login', state: {referer: props.location }}} /> } />;
};

export default PrivateRoute;
