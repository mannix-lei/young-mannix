import { FC, useState, useEffect } from 'react';
import { Skeleton, Table } from 'antd';
import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { RootState } from '../../../redux';
import { bindActionCreators, Dispatch } from 'redux';
import { initHotSong, playSong } from '../../../service/songs';
import { songsColumn } from '../songs-list/columns';
import { connect } from 'react-redux';
import { setFormData } from '../../../redux/action/songs';
import { ISong } from '../../../redux/reducer/song';

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
const HotSongs: FC<IProps> = (props) => {
    const [list, setlist] = useState<ISong[]>([]);
    const [total, settotal] = useState(0);
    const [currentSongUrl, setcurrentSongUrl] = useState('');
    const [meted, setmeted] = useState(false);
    const [loading, setloading] = useState(false);

    const initList = async () => {
        setloading(true);
        await initHotSong()
            .then((res) => {
                setlist(res.songs);
                settotal(res.totalCount);
                setloading(false);
            })
            .catch(() => {
                setloading(false);
            });
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
        props.setFormData({ provider: 'netease', keyword: 'sia', page });
    };
    return (
        <div>
            <Skeleton active loading={loading}>
                <Table
                    columns={columns}
                    dataSource={list}
                    pagination={{
                        total,
                        onChange: changeSize,
                        showSizeChanger: false,
                    }}
                />
            </Skeleton>
            <ReactAudioPlayer
                src={currentSongUrl}
                autoPlay
                controls
                muted={meted}
            />
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(HotSongs);
