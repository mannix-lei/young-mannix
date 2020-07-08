import { typedAction } from '../helpers';

interface IUserState {
    username: string;
    email: string;
    password: string;
}
const initState: IUserState = {
    username: 'mannix lei',
    email: 'mannix@gmail.com',
    password: '888888',
};
export const login = (email: string, password: string) => {
    console.log('====================================')
    console.log(email, password)
    console.log('====================================')
    return typedAction('user/LOGIN', { email, password });
};

export const logout = () => {
    return typedAction('user/LOGOUT');
};

type UserAction = ReturnType<typeof login | typeof logout>;

export const userReducer = (state = initState, action: UserAction): IUserState => {
    switch (action.type) {
        case 'user/LOGIN':
            return { username: '', email: action.payload.email, password: action.payload.password };
        case 'user/LOGOUT':
            return { username: '', email: '', password: '' };
        default:
            return state;
    }
};
