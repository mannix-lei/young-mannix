import React, { FC, useState, useEffect } from 'react';
import { playSong } from '../../../service/songs';
import { Table, Skeleton, Button } from 'antd';
import ReactAudioPlayer from 'react-audio-player';
import style from '../songs-list/songs-List.module.scss';
import { ISong } from '../../../redux/reducer/song';
import { useSelector, useDispatch } from 'react-redux';
import { SongDispatcher } from '../../../redux/action/songs';
import { RootState } from '../../../redux';
import { songsColumn } from '../songs-list/columns';


type IProps = {};

export interface ISongState {
    songsList: ISong[];
    total: number;
    loading: boolean;
}

const HotSongs: FC<IProps> = () => {
    const [currentSongUrl, setcurrentSongUrl] = useState('');
    const [meted, setmeted] = useState(false);
    const dispatcher = useDispatch();
    const rootDispatcher = new SongDispatcher(dispatcher);
    const [width, setwidth] = useState(1080);

    const { songsList, loading } = useSelector((state: RootState) => state.song);
    useEffect(() => {
        getWidth();
        rootDispatcher.getHotSong();
    }, []);

    const play = async (platform: string, id: string) => {
        const data = await playSong(platform, id);
        setcurrentSongUrl(data.songSource);
    };
    const getWidth = () => {
        const width = document.querySelector('body')?.offsetWidth;
        setwidth(width!);
    };
    const columns = songsColumn(width, play);
    return (
        <div>
            <Skeleton active loading={loading}>
                <Table
                    columns={columns}
                    dataSource={songsList}
                    pagination={false}
                />
            </Skeleton>
            <div className={style.player}>
                <ReactAudioPlayer src={currentSongUrl} autoPlay controls muted={meted}
                    children={<Button type="link">download</Button>}/>
            </div>
        </div>
    );
};
export default HotSongs;
