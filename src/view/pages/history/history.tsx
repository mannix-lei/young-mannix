import { Card, Skeleton, Timeline } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import { getHistoryInfo } from '../../../service/history';
import _ from 'lodash';
import style from './history.module.scss';

export interface IHistory {
    cover: boolean;
    desc: string;
    festival: string;
    link: string;
    recommend: boolean;
    title: string;
    type: string;
    year: string;
}
const { Item } = Timeline;
const History: FC = () => {
    const [list, setList] = useState({});
    const [loading, setloading] = useState(false);

    const initList = async () => {
        setloading(true);
        await getHistoryInfo('08').then((data) => {
            setList(data as any);
        }).catch((e) => {
            throw e;
        }).finally(() => {
            setloading(false);
        });
    };

    useEffect(() => {
        (async () => {
            await initList();
        })();
    }, []);

    return (
        <div className={style.history}>
            <Skeleton active loading={loading}>
                {!loading && !_.isEmpty(list) ? Object.entries((list as any)['08']).map((item: any) =>
                    item[1].map((foo: IHistory, index: number) => (
                        <div key={index}>
                            <Timeline>
                                <Item label={foo.year}>
                                    <div className="site-card-border-less-wrapper">
                                        <Card
                                            title={<div dangerouslySetInnerHTML={{ __html: foo.title }}/>}
                                            bordered={false}
                                            extra={
                                                <a target="_blank" href={foo.link}>
                                                    More
                                                </a>
                                            }
                                        >
                                            <div dangerouslySetInnerHTML={{ __html: foo.desc }}/>
                                        </Card>
                                    </div>
                                </Item>
                            </Timeline>
                        </div>
                    ))
                ): ''}
            </Skeleton>
        </div>
    );
};
export default History;
