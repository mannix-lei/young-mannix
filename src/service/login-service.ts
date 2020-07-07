import service from './index';

/**
 * login
 * @param name
 * @param password
 */
export const login = (name: string, password: string, remember: boolean) => {
    service.post('/login', { name, password, remember });
};
