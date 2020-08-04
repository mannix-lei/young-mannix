import React, { FC, useState, SyntheticEvent, useEffect } from 'react';
import { Table, Skeleton, Button, message } from 'antd';
import ReactAudioPlayer from 'react-audio-player';
import style from '../songs-list/songs-list.module.scss';
import { songsColumn } from '../songs-list/columns';
import { RouteComponentProps, useHistory } from 'react-router';
import { PlayCircleOutlined } from '@ant-design/icons';
import { ISong, IAlbum } from '../../../../redux/reducer/song';
import { playSong, initHotSong } from '../../../../service/songs';
import SongsForm from '../songs-form/songs-form';

interface IProps {}

export interface ISongState {
    songsList: ISong[];
    total: number;
}

const HotSongs: FC<IProps & RouteComponentProps> = () => {
    const history = useHistory();
    const [currentSongUrl, setcurrentSongUrl] = useState('');
    const [width, setwidth] = useState<number>(1080);
    const [autoPlay, setautoPlay] = useState<boolean>(false);

    const [provider, setprovider] = useState<string>(''); // 当前平
    const [currentIndex, setcurrentIndex] = useState(0); // 当前索引

    const [name, setname] = useState<string>(''); // 当前歌名
    const [singer, setsinger] = useState<IAlbum[]>([]); // 歌手名字
    const [songsList, setsongsList] = useState<ISong[]>([]);
    const [total, settotal] = useState<number>(0);
    const [loading, setloading] = useState<boolean>(false);

    useEffect(() => {
        getWidth();
    }, []);
    const play = async (record: ISong) => {
        setname(record.name);
        setsinger(record.artists);
        const data = await playSong(record.platform, record.originalId);
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
        setautoPlay(true);
        play(songsList[currentIndex]);
    };
    const handleEnd = (_e: SyntheticEvent<HTMLAudioElement, Event>) => {
        if (currentIndex < songsList.length - 1) {
            setcurrentIndex(currentIndex + 1);
            play(songsList[currentIndex + 1]);
        } else {
            setautoPlay(false);
            setname('');
            setcurrentIndex(0);
        }
    };
    const receiveQuery = (val: string) => {
        history.replace(`/songs/hot?provider=${val}`);
        setprovider(val);
        initList(val);
    };
    const initList = async (p: string) => {
        setloading(true);
        await initHotSong(p).then((res) => {
            setsongsList(res.songs);
            settotal(res.totalCount);
            setloading(false);
        }).catch(() => {
            setloading(false);
        });
    };
    const columns = songsColumn(width, play, download);
    return (
        <div>
            <SongsForm sendHotQuery={receiveQuery} tabDisable={loading}/>
            <div>
                <Button type="link" className={style.playAll} icon={<PlayCircleOutlined />} onClick={() => playAll()}>播放全部</Button>
            </div>
            <Skeleton active loading={loading}><Table columns={columns} dataSource={songsList} pagination={false} /></Skeleton>
            <div className={style.player}>
                <div className={style.currentSong}>
                    <span className={style.songName}>{name}</span>
                    {singer.map(item => item.name + ' ')}
                </div>
                <ReactAudioPlayer
                    src={currentSongUrl}
                    autoPlay={autoPlay}
                    className={style.audio}
                    controls
                    onEnded={(e) => handleEnd(e)}
                    children={<Button type="link">download</Button>}
                />
                <div className={style.provider}>{provider}</div>
            </div>
        </div>
    );
};
export default HotSongs;
