import React, { FC } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import songsImg from '../../../src/static/img/sia.jpg';
import newsImg from '../../../src/static/img/WechatIMG2.jpeg';
import style from './Home.module.scss';

const Home: FC = () => {
    const history = useHistory();
    return (
        <div className={style.body}>
            <Card hoverable className={style.card} cover={<img alt="hotImg" src={songsImg} />} onClick={() => history.push('/songs')}>
                <Meta title={<Link to={'/songs'}>听会歌～</Link>} description="Popular playlist" />
            </Card>
            <Card hoverable className={style.card} cover={<img alt="listImg" src={newsImg} />} onClick={() => history.push('/news')}>
                <Meta title={<Link to={'/news'}>看会新闻~</Link>} description="Popular news" />
            </Card>
        </div>
    );
};

export default Home;
