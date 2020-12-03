import { Tag } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import { getCityInfo, getWeatherInfo } from '../../../service/weather';
import style from './weather.module.scss';

export interface ICityInfo {
    latt_long: string;
    location_type: string;
    title: string;
    woeid: number;
}
const Weather: FC = () => {
    const [city, setcity] = useState<ICityInfo[]>([]);

    const initCityInfo = async () => {
        await getCityInfo('beijing').then((res) => {
            setcity(res);
            console.log('====================================');
            console.log(res);
            console.log('====================================');
        });
    };
    const initWeatherInfo = async () => {
        await getWeatherInfo('2163866');
    };

    useEffect(() => {
        (async () => {
            await initCityInfo();
        })();
    }, []);

    return (
        <div className={style.weather}>
            <div>
                {city.map((item) => (
                    <div key={item.woeid}>
                        <Tag color="#f50">{item.location_type}</Tag>
                        {/* <Tag color="#2db7f5">{item.title}</Tag>
                        <Tag color="#87d068">{item.latt_long}</Tag> */}
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Weather;
