import React, { FC, useState, useEffect } from 'react';
import { playSong, initHotSong } from '../../../service/songs';
import { Table, Skeleton } from 'antd';
import { songsColumn } from './columns';
import ReactAudioPlayer from 'react-audio-player';
import { ISong } from '../../../redux/modules/songs';
import { RootState } from '../../../redux';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { getSongsList } from '../../../redux/modules/songs';
import style from './songs-List.module.scss';

const mapStateToProps = (state: RootState) => ({
    list: state.song,
});
const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators(
        {
            getSongsList,
        },
        dispatch
    );
};

type IProps = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps>;
const SongsList: FC<IProps> = (props) => {
    const [list, setlist] = useState<ISong[]>([]);
    const [total, settotal] = useState(0);
    const [currentSongUrl, setcurrentSongUrl] = useState('');
    const [meted, setmeted] = useState(false);
    const [loading, setloading] = useState(false);

    const initList = async () => {
        setloading(true);
        await initHotSong().then(res => {
            setlist(res.songs);
            settotal(res.totalCount);
            setloading(false);
        }).catch(() => {
            setloading(false);
        })
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
        props.getSongsList({ provider: 'netease',  page });
    };

    return (
        <div>
            <Skeleton active loading={loading}>
                <Table
                    columns={columns}
                    dataSource={list}
                    pagination={{ total, onChange: changeSize, showSizeChanger: false }}
                />
            </Skeleton>
            <div className={style.player}>
                <ReactAudioPlayer src={currentSongUrl} autoPlay controls muted={meted} />
            </div>
        </div>
    );
};
export default connect(mapStateToProps, mapDispatchToProps)(SongsList);
