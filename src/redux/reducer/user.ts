import { login, logout } from '../action/user';

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
type UserAction = ReturnType<typeof login | typeof logout>;
export const userReducer = async (
    state = initState,
    action: UserAction
): Promise<IUserState> => {
    switch ((await action).type) {
        case 'user/LOGIN':
            return {
                username: '',
                email: (await action).payload.email,
                password: (await action).payload.password,
            };
        case 'user/LOGOUT':
            return { username: '', email: '', password: '' };
        default:
            return state;
    }
};
