import React from 'react';
import { Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { PlayCircleOutlined, DownloadOutlined } from '@ant-design/icons';
import { ISong } from '../../../redux/reducer/song';
import style from './songs-List.module.scss';

export const songsColumn: (play: (platform: string, id: string) => void) => ColumnsType<ISong> = (play) => {
    return [
        {
            title: 'song-name',
            dataIndex: 'name',
            key: 'name',
            width: '17rem',
            render: (text: string, record: ISong) => <a href={record.link} target="_blank">{text}</a>,
        },
        {
            title: 'singer-name',
            dataIndex: 'artists',
            key: 'artists',
            className: `${style.hide}`,
            render: (_text: string, record: ISong) => {
                return record.artists.map((item) => {
                    const color = record.artists.length > 5 ? 'geekblue' : 'green';
                    return (
                        <Tag color={color} key={item.name}>
                            <a href={item.link} target="_blank">{item.name}</a>
                        </Tag>
                    );
                });
            },
        },
        {
            title: 'album',
            dataIndex: 'album',
            key: 'album',
            className: `${style.hide}`,
            render: (_text: string, record: ISong) => (
                <Tag key={record.album.name}>
                    <a href={record.album.link} target="_blank">{record.album.name}</a>
                </Tag>
            ),
        },
        {
            title: 'copyright',
            dataIndex: 'copyright',
            key: 'copyright',
            className: `${style.hide}`,
            render: (text: boolean) => (text ? 'yes' : 'no'),
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            key: 'operation',
            align: 'center',
            render: (_text: string, record: ISong) => (
                <div style={{ display: 'flex', justifyContent: 'space-around', fontSize: '20px' }}>
                    <PlayCircleOutlined onClick={() => play(record.platform, record.originalId)} />
                    <DownloadOutlined />
                </div>
            ),
        },
    ];
};
