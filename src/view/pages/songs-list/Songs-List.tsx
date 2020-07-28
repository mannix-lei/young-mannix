import React, { FC, useState, useEffect, SyntheticEvent } from 'react';
import { playSong } from '../../../service/songs';
import { Table, Skeleton, message, Button } from 'antd';
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
    const [currentIndex, setcurrentIndex] = useState(0);
    const [width, setwidth] = useState(1080);
    const [currentList, setcurrentList] = useState<ISong[]>([]);
    const audioRef = React.createRef<ReactAudioPlayer>();
    const [autoPlay, setautoPlay] = useState(false);

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
        setautoPlay(true);
        await playSong(platform, id)
            .then((res) => {
                setcurrentSongUrl(res.songSource);
            })
            .catch(() => {
                message.error('获取播放信息失败，请重试');
            });
    };

    const download = async (platform: string, id: string, name: string) => {
        await playSong(platform, id)
            .then((res) => {
                const a = document.createElement('a');
                a.setAttribute('href', res.songSource);
                a.setAttribute('target', '_blank');
                a.setAttribute('download', name);
                a.click();
            })
            .catch(() => {
                message.error('获取播放信息失败，请重试');
            });
    };

    const columns = songsColumn(width, play, download);

    const changeSize = (page: number) => {
        setpage(page);
        init(provider, keyword, page);
    };
    const playAll = async () => {
        setautoPlay(true);
        setcurrentList(songsList);
        play(provider, songsList[currentIndex].originalId);
    };
    const handleEnd = (_e: SyntheticEvent<HTMLAudioElement, Event>) => {
        if (currentIndex < songsList.length - 1) {
            setcurrentIndex(currentIndex + 1);
            play(provider, songsList[currentIndex + 1].originalId);
        } else {
            setautoPlay(false);
        }
    };
    return (
        <div>
            <Skeleton active loading={loading}>
                <Button type="link" onClick={() => playAll()}>播放全部</Button>
                <Table
                    columns={columns}
                    dataSource={songsList}
                    pagination={{ total, onChange: changeSize, showSizeChanger: false }}
                />
            </Skeleton>
            <div className={style.player}>
                <ReactAudioPlayer
                    ref={audioRef}
                    className={style.audio}
                    src={currentSongUrl}
                    autoPlay={autoPlay}
                    controls
                    onEnded={(e) => handleEnd(e)}
                    muted={meted}
                />
            </div>
        </div>
    );
};
export default SongsList;
