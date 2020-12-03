import React, { FC } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
// import songsImg from '../../../src/static/img/troye.jpeg';
// import newsImg from '../../../src/static/img/WechatIMG2.jpeg';
// import nothing from '../../../src/static/img/WechatIMG3.jpeg';
import style from './Home.module.scss';

const Home: FC = () => {
    const history = useHistory();
    return (
        <div className={style.body}>
            <Card hoverable className={style.card} cover={<img alt="hotImg" src={'http://www.dmoe.cc/random.php?233335536958'} />} onClick={() => history.push('/songs/hot')}>
                <Meta title={<Link to={'/songs/hot'}>听会歌～</Link>} description="Popular playlist" />
            </Card>
            <Card hoverable className={style.card} cover={<img alt="listImg" src={'http://www.dmoe.cc/random.php?233335546957'} />} onClick={() => history.push('/news')}>
                <Meta title={<Link to={'/news'}>看会新闻~</Link>} description="Popular news" />
            </Card>
            <Card hoverable className={style.card} cover={<img alt="listImg" src={'http://www.dmoe.cc/random.php?233335556956'} />} onClick={() => history.push('/leetcode')}>
                <Meta title={<Link to={'/leetcode'}>看看算法~</Link>} description="coding..." />
            </Card>
            <Card hoverable className={style.card} cover={<img alt="listImg" src={'http://www.dmoe.cc/random.php?233335566955'} />} onClick={() => history.push('/history')}>
                <Meta title={<Link to={'/history'}>回顾历史~</Link>} description="历史上的今天" />
            </Card>
            <Card hoverable className={style.card} cover={<img alt="listImg" src={'http://www.dmoe.cc/random.php?233335526955'} />} onClick={() => history.push('/weather')}>
                <Meta title={<Link to={'/weather'}>看看天气~</Link>} description="看看天气" />
            </Card>
            <Card hoverable className={style.card} cover={<img alt="listImg" src={'http://www.dmoe.cc/random.php?233335516954'} />} onClick={() => history.push('')}>
                <Meta title={<Link to={''}>后续板块陆续开启～</Link>} description="敬请期待..." />
            </Card>
        </div>
    );
};

export default Home;
