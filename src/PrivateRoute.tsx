import React from 'react';
import { Route, RouteComponentProps, Redirect } from 'react-router-dom';
import { useAuth } from './view/common/header/Auth';
import HeaderLayout from '../src/view/common/header/Header';

interface IProps {
    Component: React.FC<RouteComponentProps>;
    path: string;
    exact?: boolean;
}
const PrivateRoute = ({ Component, ...rest }: IProps) => {
    const { authTokens } = useAuth();
    return (
        <Route
            {...rest}
            render={(props) =>
                authTokens ? (
                    <HeaderLayout>
                        <Component {...props} />
                    </HeaderLayout>
                ) : (
                    <Redirect to={{ pathname: '/login', state: { referer: props.location } }} />
                )
            }
        />
    );
};

export default PrivateRoute;
