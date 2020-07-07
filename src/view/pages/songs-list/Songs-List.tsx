import React, { FC, useState, useEffect } from 'react';
import { getSongsList } from '../../../service/songs';
import { Table } from 'antd';
import { songsColumn } from './columns';

interface IAlbum {
    name: string;
    link: string;
}
export interface ISong {
    originalId: string;
    name: string;
    link: string;
    mvLink: string;
    artists: IAlbum[];
    album: IAlbum;
    hasCopyright: boolean;
    fee: number;
    platform: string;
}

const SongsList: FC = () => {
    const [list, setlist] = useState<ISong[]>([]);
    const [total, settotal] = useState(0);

    const initList = async () => {
        const { songs, totalCount } = await getSongsList('netease', 'sia');
        setlist(songs);
        settotal(totalCount);
    };
    useEffect(() => {
       initList();
    }, []);

    return (
        <Table columns={songsColumn} dataSource={list} />
    );
};
export default SongsList;
