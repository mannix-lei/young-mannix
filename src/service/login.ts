// import service from './index';

/**
 * login
 * @param name
 * @param password
 */
export const login = async (name: string, password: string, remember: boolean) => {
    console.log(name, password, remember);
    
    // return service.post('/login', { name, password, remember });
    return {
        token: '234234234',
    };
};
