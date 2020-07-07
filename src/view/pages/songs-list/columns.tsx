import React from 'react';
import { Link } from 'react-router-dom';
import { ISong } from './Songs-List';
import { Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { PlayCircleOutlined } from '@ant-design/icons';
import { playSong } from '../../../service/songs';

export const songsColumn: ColumnsType<ISong> = [
    {
        title: 'song-name',
        dataIndex: 'name',
        key: 'name',
        render: (text: string, record: ISong) => <Link to={record.link}>{text}</Link>,
    },
    {
        title: 'singer-name',
        dataIndex: 'artists',
        key: 'artists',
        render: (_text: string, record: ISong) => {
            return record.artists.map((item) => {
                const color = record.artists.length > 5 ? 'geekblue' : 'green';
                return (
                    <Tag color={color} key={item.name}>
                        <Link to={item.link}>{item.name}</Link>
                    </Tag>
                );
            });
        },
    },
    {
        title: 'album',
        dataIndex: 'album',
        key: 'album',
        render: (text: string, record: ISong) => (
            <Tag key={record.album.name}>
                <Link to={record.album.link}>{record.album.name}</Link>
            </Tag>
        ),
    },
    {
        title: 'copyright',
        dataIndex: 'copyright',
        key: 'copyright',
        render: (text: boolean) => (text ? 'yes' : 'no'),
    },
    {
        title: 'play',
        dataIndex: 'play',
        key: 'play',
        render: (text: string, record: ISong) => <PlayCircleOutlined onClick={() => play(record.platform, record.originalId)} />,
    },
];

const play = async (platform: string, id: string) => {
    const data = await playSong(platform, id);
    console.log('====================================');
    console.log(data);
    console.log('====================================');
};
