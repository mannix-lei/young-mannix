import service from './index';

export const getAvator = async () => {
    return await service.get('/avatorapi/sjtx');
};
