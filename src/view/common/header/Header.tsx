import React, { FC, ReactNode } from 'react';
import { Layout, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import style from './Header.module.scss';
import SongsForm from '../../pages/songs-form/songs-form';

const { Header, Content, Footer } = Layout;

export enum menuType {
    歌单 = 'songs-list',
    最新音乐 = 'latest-list',
}

interface IProps {
    children?: ReactNode;
}
const HeaderLayout: FC = (props: IProps) => {
    return (
        <Layout className={style.layout}>
            <Header>
                <div className={style.search}>
                    <div className={style.avator} onClick={() => window.location.href='/' }></div>
                    <SongsForm
                        style={{
                            width: '18rem',
                            marginLeft: '3rem',
                            marginTop: '1rem',
                        }}
                    />
                </div>
                <Avatar
                    className={style.loginAvatar}
                    icon={<UserOutlined />}
                />
            </Header>
            <Content className={style.content}>
                <div className='site-layout-content'>{props.children}</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Young Mannix ©2020 Created by Mannix Lei
            </Footer>
        </Layout>
    );
};

export default HeaderLayout;
