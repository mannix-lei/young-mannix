import React, { FC, useState, useEffect } from 'react';
import { playSong } from '../../../service/songs';
import { Table, Skeleton, Button, message } from 'antd';
import { songsColumn } from './columns';
import ReactAudioPlayer from 'react-audio-player';
import style from './songs-list.module.scss';
import { ISong } from '../../../redux/reducer/song';
import { useSelector, useDispatch } from 'react-redux';
import { SongDispatcher } from '../../../redux/action/songs';
import { RootState } from '../../../redux';
import { RouteComponentProps } from 'react-router';

interface IProps {}

export interface ISongState {
    songsList: ISong[];
    total: number;
    loading: boolean;
}

const SongsList: FC<IProps & RouteComponentProps> = (props) => {
    const params = new URLSearchParams(props.location.search);
    const [currentSongUrl, setcurrentSongUrl] = useState('');
    const [meted, setmeted] = useState(false);
    const dispatcher = useDispatch();
    const rootDispatcher = new SongDispatcher(dispatcher);
    const [provider, setprovider] = useState(params.get('provider') || 'netease');
    const [keyword, setkeyword] = useState(params.get('keyword') || 'ferrari');
    const [page, setpage] = useState(Number(params.get('page')) || 1);
    const [width, setwidth] = useState(1080);

    const { songsList, total, loading } = useSelector((state: RootState) => state.song);
    useEffect(() => {
        getWidth();
        init(provider, keyword, page);
    }, []);

    const getWidth = () => {
        const width = document.querySelector('body')?.offsetWidth;
        setwidth(width!);
    };
    const init = (p: string, k: string, page: number) => {
        rootDispatcher.getSongList({ provider: p, keyword: k, page });
    };
    const play = async (platform: string, id: string) => {
        await playSong(platform, id)
            .then((res) => {
                setcurrentSongUrl(res.songSource);
            })
            .catch(() => {
                message.error('获取播放信息失败，请重试');
            });
    };

    const columns = songsColumn(width, play);

    const changeSize = (page: number) => {
        setpage(page);
        init(provider, keyword, page);
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
                <ReactAudioPlayer
                    src={currentSongUrl}
                    autoPlay
                    controls
                    muted={meted}
                    children={<Button type="link">download</Button>}
                />
            </div>
        </div>
    );
};
export default SongsList;
