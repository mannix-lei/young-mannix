import { ICityInfo } from '../view/pages/weather/weather';
import service from './index';

/**
 * 获取城市信息
 * @param cityname
 */
export const getCityInfo = async (cityname: string): Promise<ICityInfo[]> => {
    return await service.get(`/weather/location/search/?query=${cityname}`);
};

/**
 * 获取天气信息
 * @param woeid
 */
export const getWeatherInfo = async (woeid: string) => {
    return await service.get(`/weather/location/${woeid}/`);
};
