import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import hotImg from '../../../static/img/WechatIMG1.jpeg';
import listImg from '../../../static/img/WechatIMG2.jpeg';
import style from './songs-home.module.scss';

const SongsHome: FC = () => {
    return (
        <div className={style.body}>
            <Card hoverable className={style.card} cover={<img alt="hotImg" src={hotImg} />}>
                <Meta title={<Link to={'/list'}>songs list</Link>} description="Popular playlist" />
            </Card>
            <Card hoverable className={style.card} cover={<img alt="listImg" src={listImg} />}>
                <Meta title={<Link to={'/hot'}>hot songs</Link>} description="Popular playlist" />
            </Card>
        </div>
    );
};

export default SongsHome;
