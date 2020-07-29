import React, { FC, useState, useEffect, SyntheticEvent } from 'react';
import { playSong } from '../../../service/songs';
import { Table, Skeleton, Button, message } from 'antd';
import ReactAudioPlayer from 'react-audio-player';
import style from '../songs-list/songs-list.module.scss';
import { ISong } from '../../../redux/reducer/song';
import { useSelector, useDispatch } from 'react-redux';
import { SongDispatcher } from '../../../redux/action/songs';
import { RootState } from '../../../redux';
import { songsColumn } from '../songs-list/columns';
import { RouteComponentProps } from 'react-router';
import { PlayCircleOutlined } from '@ant-design/icons';

interface IProps {}

export interface ISongState {
    songsList: ISong[];
    total: number;
    loading: boolean;
}

const HotSongs: FC<IProps & RouteComponentProps> = (props) => {
    const [currentSongUrl, setcurrentSongUrl] = useState('');
    const [meted, setmeted] = useState(false);
    const dispatcher = useDispatch();
    const rootDispatcher = new SongDispatcher(dispatcher);
    const [width, setwidth] = useState(1080);
    const [autoPlay, setautoPlay] = useState(false);
    const params = new URLSearchParams(props.location.search);
    const [provider, setprovider] = useState(params.get('provider') || 'netease');
    const [keyword, setkeyword] = useState(params.get('keyword') || 'ferrari');
    const [page, setpage] = useState(Number(params.get('page')) || 1);
    const [currentIndex, setcurrentIndex] = useState(0);
    const [name, setname] = useState('');

    const { songsList, loading } = useSelector((state: RootState) => state.song);
    useEffect(() => {
        getWidth();
        rootDispatcher.getHotSong('netease');
    }, []);

    const play = async (platform: string, id: string, name: string) => {
        setname(name);
        const data = await playSong(platform, id);
        setcurrentSongUrl(data.songSource);
    };
    const download = async (platform: string, id: string, name: string) => {
        await playSong(platform, id)
            .then((res) => {
                if (navigator.platform.match(/Win|Linux|MAC/i)) {
                    const a = document.createElement('a');
                    a.setAttribute('href', res.songSource);
                    a.setAttribute('target', '_blank');
                    a.setAttribute('download', name);
                    a.click();
                } else {
                    const myFrame= document.createElement('iframe');
                    myFrame.src = res.songSource;
                    myFrame.style.display = name;
                    document.body.appendChild(myFrame);
                }
            })
            .catch(() => {
                message.error('获取播放信息失败，请重试');
            });
    };
    const getWidth = () => {
        const width = document.querySelector('body')?.offsetWidth;
        setwidth(width!);
    };
    const playAll = async () => {
        setprovider(params.get('provider') || 'netease');
        setautoPlay(true);
        play(provider, songsList[currentIndex].originalId, songsList[currentIndex].name);
    };
    const handleEnd = (_e: SyntheticEvent<HTMLAudioElement, Event>) => {
        if (currentIndex < songsList.length - 1) {
            setcurrentIndex(currentIndex + 1);
            play(provider, songsList[currentIndex + 1].originalId, songsList[currentIndex].name);
        } else {
            setautoPlay(false);
            setname('');
            setcurrentIndex(0);
        }
    };
    const columns = songsColumn(width, play, download);
    return (
        <div>
            <Skeleton active loading={loading}>
            <Button type="link" className={style.playAll} icon={<PlayCircleOutlined />} onClick={() => playAll()}>播放全部</Button>
                <Table columns={columns} dataSource={songsList} pagination={false} />
            </Skeleton>
            <div className={style.player}>
                {name && <div className={style.currentSong}>当前播放：{name}</div>}
                <ReactAudioPlayer
                    src={currentSongUrl}
                    autoPlay={autoPlay}
                    className={style.audio}
                    controls
                    onEnded={(e) => handleEnd(e)}
                    muted={meted}
                    children={<Button type="link">download</Button>}
                />
            </div>
        </div>
    );
};
export default HotSongs;
