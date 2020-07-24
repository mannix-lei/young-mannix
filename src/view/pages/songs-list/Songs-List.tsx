import React, { FC, useState, useEffect } from 'react';
import { playSong } from '../../../service/songs';
import { Table, Skeleton, Button } from 'antd';
import { songsColumn } from './columns';
import ReactAudioPlayer from 'react-audio-player';
import style from './songs-List.module.scss';
import { ISong } from '../../../redux/reducer/song';
import { useSelector, useDispatch } from 'react-redux';
import { SongDispatcher } from '../../../redux/action/songs';
import { RootState } from '../../../redux';


type IProps = {};

export interface ISongState {
    songsList: ISong[];
    total: number;
    loading: boolean;
}

const SongsList: FC<IProps> = () => {
    const [currentSongUrl, setcurrentSongUrl] = useState('');
    const [meted, setmeted] = useState(false);
    const dispatcher = useDispatch();
    const rootDispatcher = new SongDispatcher(dispatcher);

    const { songsList, total, loading } = useSelector((state: RootState) => state.song);
    useEffect(() => {
        rootDispatcher.getSongList({ provider: 'netease', keyword: 'sia', page: 1 });
    }, []);

    const play = async (platform: string, id: string) => {
        const data = await playSong(platform, id);
        setcurrentSongUrl(data.songSource);
    };

    const columns = songsColumn(play);

    const changeSize = (page: number) => {
        rootDispatcher.getSongList({ provider: 'netease', keyword: 'sia', page });
    };
    return (
        <div>
            <Skeleton active loading={loading}>
                <Table
                    columns={columns}
                    dataSource={songsList}
                    pagination={{ total, onChange: changeSize, showSizeChanger: false }}
                />
            </Skeleton>
            <div className={style.player}>
                <ReactAudioPlayer src={currentSongUrl} autoPlay controls muted={meted}
                    children={<Button type="link">download</Button>}/>
            </div>
        </div>
    );
};
export default SongsList;
