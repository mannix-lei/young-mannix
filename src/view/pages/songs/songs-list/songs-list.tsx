import React, { FC, useState, useEffect, SyntheticEvent } from 'react';
import { Table, Skeleton, message, Button } from 'antd';
import { songsColumn } from './columns';
import ReactAudioPlayer from 'react-audio-player';
import style from './songs-list.module.scss';
import { RouteComponentProps, useHistory } from 'react-router';
import { PlayCircleOutlined } from '@ant-design/icons';
import { ISong, ISongForm, IAlbum } from '../../../../redux/reducer/song';
import { playSong, initSongsList } from '../../../../service/songs';
import SongsForm, { ProviderType } from '../songs-form/songs-form';

interface IProps {}

export interface ISongState {
    songsList: ISong[];
    total: number;
}

const SongsList: FC<IProps & RouteComponentProps> = () => {
    const history = useHistory();
    const [currentSongUrl, setcurrentSongUrl] = useState('');
    const params = new URLSearchParams(history.location.search);
    const [provider, setprovider] = useState<string>(params.get('provider') || ProviderType.网易云);
    const [keyword, setkeyword] = useState<string>(params.get('keyword') || 'sia'); // 当前搜索关键词
    const [page, setpage] = useState<number>(Number(params.get('page')) || 1); // 页码

    const [currentIndex, setcurrentIndex] = useState(0);
    const [width, setwidth] = useState(1080);
    const [name, setname] = useState('');
    const audioRef = React.createRef<ReactAudioPlayer>();
    const [autoPlay, setautoPlay] = useState(false);
    const [singer, setsinger] = useState<IAlbum[]>([]); // 歌手名字
    const [loading, setloading] = useState<boolean>(false);
    const [list, setlist] = useState<ISong[]>([]);
    const [total, settotal] = useState<number>(0);

    useEffect(() => {
        getWidth();
    }, []);

    const getWidth = () => {
        const width = document.querySelector('body')?.offsetWidth;
        setwidth(width!);
    };
    const init = async (p: string, k: string, page: number) => {
        setkeyword(k);
        setprovider(p);
        setpage(page);
        setloading(true);
        await initSongsList({ page, provider: p, keyword: k }).then((res) => {
            setlist(res.songs);
            settotal(res.totalCount);
            setloading(false);
        }).catch(() => {
            setloading(false);
        });
    };
    const play = async (record: ISong) => {
        setautoPlay(true);
        setsinger(record.artists);
        setname(record.name);
        await playSong(record.platform, record.originalId)
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

    const columns = songsColumn(width, play, download);

    const changeSize = (page: number) => {
        setpage(page);
        init(provider, keyword, page);
    };
    const playAll = async () => {
        setautoPlay(true);
        play(list[currentIndex]);
    };
    const handleEnd = (_e: SyntheticEvent<HTMLAudioElement, Event>) => {
        if (currentIndex < list.length - 1) {
            setcurrentIndex(currentIndex + 1);
            play(list[currentIndex + 1]);
        } else {
            setname('');
            setcurrentIndex(0);
            setautoPlay(false);
        }
    };
    const receiveQuery = (form: ISongForm) => {
        history.replace(`/songs/list?provider=${form.provider}&keyword=${form.keyword}&page=1`);
        init(form.provider, form.keyword, form.page);
    };
    return (
        <div>
            <SongsForm sendListQuery={receiveQuery} inputDisable={loading}/>
            <Skeleton active loading={loading}>
                <Button type="link" className={style.playAll} icon={<PlayCircleOutlined />} onClick={() => playAll()}>播放全部</Button>
                <Table
                    columns={columns}
                    dataSource={list}
                    pagination={{ current: page, total, onChange: changeSize, showSizeChanger: false }}
                />
            </Skeleton>
            <div className={style.player}>
                <div className={style.currentSong}>
                    <span className={style.songName}>{name}</span>
                    {singer.map((item) => item.name + ' ')}
                </div>
                <ReactAudioPlayer
                    ref={audioRef}
                    className={style.audio}
                    src={currentSongUrl}
                    autoPlay={autoPlay}
                    controls
                    onEnded={(e) => handleEnd(e)}
                />
                {currentSongUrl && <div className={style.provider}>{provider}</div>}
            </div>
        </div>
    );
};
export default SongsList;
