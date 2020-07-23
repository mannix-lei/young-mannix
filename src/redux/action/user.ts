import { typedAction } from '../helpers';

export const login = (email: string, password: string) => {
    return typedAction('user/LOGIN', { email, password });
};

export const logout = () => {
    return typedAction('user/LOGOUT');
};

