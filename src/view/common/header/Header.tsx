import React, { FC, ReactNode, useEffect } from 'react';
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
    const { loading } = useSelector((state: RootState) => state.loading);

    useEffect(() => {
        rootDispatcher.getLocalCity();
    }, []);
    return (
        <Layout className={style.layout}>
            <Header>
                <div className={style.search}>
                    <div className={style.avator} onClick={() => (window.location.href = '/')}></div>
                    {/* <SongsForm /> */}
                </div>
                <Avatar className={style.loginAvatar} src={`http://api.rosysun.cn/sjtx/?type=${Math.floor(Math.random() * (5)) + 1}`} />
            </Header>
            <Content className={style.content}>
                <Skeleton active loading={loading}>
                    <span>{cname}&nbsp;&nbsp;{cip}</span>
                    <div className="site-layout-content">{props.children}</div>
                </Skeleton>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Young Mannix ©2020 Created by Mannix Lei</Footer>
        </Layout>
    );
};

export default HeaderLayout;
