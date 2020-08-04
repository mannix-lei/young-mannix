import { Dispatch } from 'redux';
import {
    ISongForm,
    SongActionType,
    ISongDispatchAction,
} from '../reducer/song';
import { initHotSong, initSongsList } from '../../service/songs';

export class SongDispatcher {
    private readonly dispatch: Dispatch<ISongDispatchAction>;

    constructor(dispatch: Dispatch<ISongDispatchAction>) {
        this.dispatch = dispatch;
    }

    public getHotSong = async (p: string) => {
        await initHotSong(p).then((res) => {
            this.dispatch({
                type: SongActionType.GetHotSong,
                payload: {
                    songsList: res.songs,
                    total: res.totalCount || res.songs.length,
                },
            });
        });
    };
    public getSongList = async (query: ISongForm) => {
        await initSongsList(query).then((res) => {
            this.dispatch({
                type: SongActionType.GetSongList,
                payload: {
                    songsList: res.songs,
                    total: res.totalCount || res.songs.length,
                },
            });
        });
    };
}
