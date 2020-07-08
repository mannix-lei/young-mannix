import React, { FC, useState, useEffect } from 'react';
import { getSongsList, playSong } from '../../../service/songs';
import { Table } from 'antd';
import { songsColumn } from './columns';
import ReactAudioPlayer from 'react-audio-player';
import { ISong } from '../../../redux/modules/songs';

const SongsList: FC = () => {
    const [list, setlist] = useState<ISong[]>([]);
    const [total, settotal] = useState(0);
    const [platform, setplatform] = useState('');
    const [id, setid] = useState('');
    const [currentSongUrl, setcurrentSongUrl] = useState('');
    const [meted, setmeted] = useState(false);

    const initList = async (page: number = 1) => {
        const { songs, totalCount } = await getSongsList('netease', 'sia', page);
        setlist(songs);
        settotal(totalCount);
    };
    useEffect(() => {
        initList();
    }, []);

    const play = async (platform: string, id: string) => {
        const data = await playSong(platform, id);
        setcurrentSongUrl(data.songSource);
    };

    const columns = songsColumn(play);

    const changeSize = (page: number) => {
        initList(page);
    };

    return (
        <div>
            <Table
                columns={columns}
                dataSource={list}
                pagination={{ total, onChange: changeSize, showSizeChanger: false }}
            />
            <ReactAudioPlayer src={currentSongUrl} autoPlay controls muted={meted} />
        </div>
    );
};
export default SongsList;
