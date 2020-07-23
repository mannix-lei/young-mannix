import React, { FC, useState, useEffect } from 'react';
import { playSong, initHotSong } from '../../../service/songs';
import { Table, Skeleton, Button } from 'antd';
import { songsColumn } from './columns';
import ReactAudioPlayer from 'react-audio-player';
import { RootState } from '../../../redux';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import style from './songs-List.module.scss';
import { ISong } from '../../../redux/reducer/song';
import { setFormData } from '../../../redux/action/songs';

const mapStateToProps = (state: RootState) => ({
    list: state.song,
});
const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators(
        {
            setFormData,
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
        props.setFormData({ provider: 'netease', keyword: '',  page });
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
                <ReactAudioPlayer src={currentSongUrl} autoPlay controls muted={meted}
                    children={<Button type="link">download</Button>}/>
            </div>
        </div>
    );
};
export default connect(mapStateToProps, mapDispatchToProps)(SongsList);
