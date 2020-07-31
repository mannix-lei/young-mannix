import service from './index';
import { IInitialState } from '../redux/reducer/news';

export const getNewsList = async (type: string): Promise<IInitialState> => {
    return await service.post('/newsapi/tophub/get', { type });
};
