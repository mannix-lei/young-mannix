import React, { FC, useEffect, useState } from 'react';
import style from './news.module.scss';
import { List, Avatar, Divider, Button, Skeleton } from 'antd';
import { newsTypeList } from './index.function';
import { getNewsList } from '../../../service/news';
import { IInitialState } from '../../../redux/reducer/news';
import { useHistory } from 'react-router-dom';

export enum NewsType {
    'zhihu' = '知乎热榜',
    'weibo' = '微博热搜',
    'weixin' = '微信 ‧ 24h热文榜,',
    'baidu' = '百度 ‧ 实时热点',
    'toutiao' = '今日头条',
    '"163"' = '网易新闻',
    'xl' = '新浪网 ‧ 热词排行榜',
    '36k' = '36氪 ‧ 24小时热榜(默认)',
    'hitory' = '历史上的今天',
    'sspai' = '少数派',
    'csdn' = '**csdn **今日推荐',
    'juejin' = '掘金热榜',
    'bilibili' = '哔哩哔哩热榜',
    'douyin' = '抖音视频榜',
    '52pojie' = '吾爱破解热榜',
    'v2ex' = 'V2ex 热帖',
    'hostloc' = '全球主机论坛热帖',
}

export interface INewsType {
    key: string;
    value: string;
}

const NewsHome: FC = () => {
    const history = useHistory();
    const params = new URLSearchParams(history.location.search);
    const [type, settype] = useState<string>(params.get('type') || 'zhihu');
    const [newsData, setnewsData] = useState<IInitialState>({ last_update: '', name: '', list: [] });
    const [loading, setloading] = useState<boolean>(false);
    const [currentTime, setcurrentTime] = useState(new Date().toLocaleString());

    useEffect(() => {
        initList(type);
        const t = setInterval(() => {
            setcurrentTime(new Date().toLocaleString());
        }, 1000);

        return () => {
            clearTimeout(t);
        };
    }, []);

    const initList = async (type: string) => {
        setloading(true);
        history.replace(`/news?type=${type}`);
        await getNewsList(type)
            .then((res) => {
                setnewsData(res);
                setloading(false);
            })
            .catch(() => {
                setloading(false);
            });
    };

    const handleChangeType = (type: string) => {
        settype(type);
        initList(type);
    };

    return (
        <div className={style.newsbody}>
            <div>
                {newsTypeList.map((item) => (
                    <span>
                        <Button type="link" disabled={loading} onClick={() => handleChangeType(item.key)}>
                            {item.value}
                        </Button>
                        <Divider type="vertical" />
                    </span>
                ))}
            </div>
            <div className={style.header}>
                <div style={{ marginRight: '3rem' }}>更新时间: {newsData.last_update}</div>
                <div>
                    来自: <span className={style.source}>{newsData.name}</span>
                </div>
                <div style={{ marginLeft: '3rem' }}>当前时间: {currentTime}</div>
            </div>
            <Skeleton active loading={loading}>
                <List
                    itemLayout="horizontal"
                    dataSource={newsData.list}
                    renderItem={(item) => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={
                                    <Avatar
                                        src={`http://api.rosysun.cn/sjtx/?type=${Math.floor(Math.random() * 5) + 1}`}
                                    />
                                }
                                title={
                                    <a href={item.link} target="_blank">
                                        {item.title}
                                    </a>
                                }
                                description={item.other}
                            />
                        </List.Item>
                    )}
                />
            </Skeleton>
        </div>
    );
};
export default NewsHome;
