import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import hotImg from '../../../src/static/img/WechatIMG1.jpeg';
import listImg from '../../../src/static/img/WechatIMG2.jpeg';
import style from './Home.module.scss';

const Home: FC = () => {
    return (
        <div className={style.body}>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={
                    <img
                        alt="hotImg"
                        src={hotImg}
                    />
                }
            >
                <Meta
                    title={<Link to={'/list'}>songs list</Link>}
                    description="Popular playlist"
                />
            </Card>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={
                    <img
                        alt="listImg"
                        src={listImg}
                    />
                }
            >
                <Meta
                    title={<Link to={'/hot'}>hot songs</Link>}
                    description="Popular playlist"
                />
            </Card>
        </div>
    );
};

export default Home;
