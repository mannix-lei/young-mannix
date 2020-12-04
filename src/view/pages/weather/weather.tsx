import { Card, Col, Row, Tag } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import { getCityInfo, getWeatherInfo } from '../../../service/weather';
import { data } from './weather.function';
import style from './weather.module.scss';

export interface ICityInfo {
    latt_long: string;
    location_type: string;
    title: string;
    woeid: number;
}
const Weather: FC = () => {
    const [city, setcity] = useState<ICityInfo[]>([]);
    const [current, setcurrent] = useState<string>('beijing');
    const [currentTime, setcurrentTime] = useState(new Date().toLocaleString());

    const initCityInfo = async () => {
        await getCityInfo(current).then(async (res) => {
            setcity(res);
            await getWeatherInfo(res[0].woeid);
        });
    };

    useEffect(() => {
        const t = setInterval(() => {
            setcurrentTime(new Date().toLocaleString());
        }, 1000);

        return () => {
            clearTimeout(t);
        };
    }, []);

    useEffect(() => {
        (async () => {
            await initCityInfo();
        })();
    }, []);

    return (
        <div className={style.weather}>
            <Card>
                <Card.Grid>国家：{data.parent.title}</Card.Grid>
                <Card.Grid>类型：{data.parent.location_type}</Card.Grid>
                <Card.Grid>经纬度：{data.parent.latt_long}</Card.Grid>
                <Card.Grid>时间：{currentTime}</Card.Grid>
            </Card>
            <div className={style.baseinfo}>
                {city.map((item) => (
                    <div key={item.woeid}>
                        <Tag color='#2db7f5'>城市：{item.title}</Tag>
                        <Tag color='#f50'>位置类型：{item.location_type}</Tag>
                        <Tag color='#87d068'>经纬度：{item.latt_long}</Tag>
                    </div>
                ))}
                <Tag color='#f50'>时区：{data.timezone}</Tag>
                <Tag color='#2db7f5'>日出：{new Date(data.sun_rise).toLocaleString()}</Tag>
                <Tag color='#87d068'>日落：{new Date(data.sun_set).toLocaleString()}</Tag>
            </div>
            <div className={style.prediect}>
                {data.consolidated_weather.map((bar) => (
                    <div key={bar.id} className={style.pItem}>
                        <img src={`https://www.metaweather.com/static/img/weather/${bar.weather_state_abbr}.svg`}/>
                        <Row><span className={style.preInfo}>日期：</span>{new Date(bar.applicable_date).toLocaleString()}</Row>
                        <Row><span className={style.preInfo}>最高温：</span>{bar.max_temp.toFixed(2)}&#176;</Row>
                        <Row><span className={style.preInfo}>最低温：</span>{bar.min_temp.toFixed(2)}&#176;</Row>
                        <Row><span className={style.preInfo}>当前温度：</span>{bar.the_temp.toFixed(2)}&#176;</Row>
                        <Row><span className={style.preInfo}>风速：</span>{bar.wind_speed.toFixed(2)}</Row>
                        <Row><span className={style.preInfo}>风向：</span>{bar.wind_direction.toFixed(2)}</Row>
                        <Row><span className={style.preInfo}>气压：</span>{bar.air_pressure.toFixed(2)}</Row>
                        <Row><span className={style.preInfo}>湿度：</span>{bar.air_pressure}</Row>
                        <Row><span className={style.preInfo}>能见度：</span>{bar.air_pressure.toFixed(2)}</Row>
                        <Row><span className={style.preInfo}>预测值：</span>{bar.predictability.toFixed(2)}</Row>
                    </div>
                ))}
            </div>
            <div className={style.origin}>
                来源：{data.sources.map((foo) => (
                    <a href={foo.url}>{foo.title}</a>
                ))}
            </div>
        </div>
    );
};
export default Weather;
