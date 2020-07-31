import service from './index';

/**
 * login
 * @param name
 * @param password
 */
export const getCurrentCity = async () => {
    return await service.get('/cityapi/cityjson');
};
