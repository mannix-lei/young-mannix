import service from './index';

export const getHistoryInfo = async (year: string) => {
    return await service.get(`/history/${year}.json`);
};
