import React, { FC, ReactNode, useEffect, useState } from 'react';
import { Layout, Avatar, Skeleton } from 'antd';
import style from './Header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { CityDispatcher } from '../../../redux/action/city';
import { RootState } from '../../../redux';

const { Header, Content, Footer } = Layout;

export enum menuType {
    歌单 = 'songs-list',
    最新音乐 = 'latest-list',
}

interface IProps {
    children?: ReactNode;
}
const HeaderLayout: FC = (props: IProps) => {
    const dispatcher = useDispatch();
    const rootDispatcher = new CityDispatcher(dispatcher);
    const { cip, cname } = useSelector((state: RootState) => state.city);
    const [avator, setavator] = useState<number>(Math.floor(Math.random() * (5)) + 1);

    useEffect(() => {
        rootDispatcher.getLocalCity();
    }, []);
    return (
        <Layout className={style.layout}>
            <Header>
                <div className={style.search}>
                    <div className={style.avator} onClick={() => (window.location.href = '/')}></div>
                </div>
                <span>{cname}&nbsp;&nbsp;{cip}</span>
                <span onClick={() => setavator(Math.floor(Math.random() * (5)) + 1)}>
                    <Avatar className={style.loginAvatar} src={`http://api.rosysun.cn/sjtx/?type=${avator}`} />
                </span>
            </Header>
            <Content className={style.content}>
                <div className="site-layout-content">{props.children}</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Young Mannix ©2020 Created by Mannix Lei</Footer>
        </Layout>
    );
};

export default HeaderLayout;
