import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React, { FC } from 'react';
import { Link, useHistory } from 'react-router-dom';
import style from './Home.module.scss';

const Home: FC = () => {
    const history = useHistory();
    return (
        <div className={style.body}>
            <Card
                hoverable
                className={style.card}
                cover={<img alt='hotImg' src={'https://picsum.photos/340/260?random=1'} loading='lazy'/>}
                onClick={() => history.push('/songs/hot')}>
                <Meta title={<Link to={'/songs/hot'}>听会歌～</Link>} description='Popular playlist' />
            </Card>
            <Card
                hoverable
                className={style.card}
                cover={<img alt='listImg' src={'https://picsum.photos/340/200?random=1'} loading='lazy'  />}
                onClick={() => history.push('/news')}>
                <Meta title={<Link to={'/news'}>看会新闻~</Link>} description='Popular news' />
            </Card>
            <Card
                hoverable
                className={style.card}
                cover={<img alt='listImg' src={'https://picsum.photos/340/160?random=1'} loading='lazy'  />}
                onClick={() => history.push('/leetcode')}>
                <Meta title={<Link to={'/leetcode'}>看看算法~</Link>} description='coding...' />
            </Card>
            <Card
                hoverable
                className={style.card}
                cover={<img alt='listImg' src={'https://picsum.photos/340/260?random=1'} loading='lazy'  />}
                onClick={() => history.push('/history')}>
                <Meta title={<Link to={'/history'}>回顾历史~</Link>} description='历史上的今天' />
            </Card>
            <Card
                hoverable
                className={style.card}
                cover={<img alt='listImg' src={'https://picsum.photos/340/310?random=1'} loading='lazy'  />}
                onClick={() => history.push('/weather')}>
                <Meta title={<Link to={'/weather'}>看看天气~</Link>} description='看看天气' />
            </Card>
            <Card
                hoverable
                className={style.card}
                cover={<img alt='listImg' src={'https://picsum.photos/340/300?random=1'} loading='lazy' />}
                onClick={() => history.push('')}>
                <Meta title={<Link to={''}>后续板块陆续开启～</Link>} description='敬请期待...' />
            </Card>
        </div>
    );
};

export default Home;
