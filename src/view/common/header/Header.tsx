import React, { FC, ReactNode } from 'react';
import { Layout, Menu, Avatar, Breadcrumb } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import style from './Header.module.scss';

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
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[menuType.最新音乐]}>
                    <Menu.Item key={menuType.最新音乐}>最新音乐</Menu.Item>
                    <Menu.Item key={menuType.歌单}>歌单</Menu.Item>
                </Menu>
                <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">
                    {props.children}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Young Mannix ©2020 Created by Mannix Lei</Footer>
        </Layout>
    );
};

export default HeaderLayout;
