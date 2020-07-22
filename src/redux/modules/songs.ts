import { typedAction } from '../helpers';
import { initSongsList } from '../../service/songs';

export interface ISong {
    originalId: string;
    name: string;
    link: string;
    mvLink: string;
    artists: IAlbum[];
    album: IAlbum;
    hasCopyright: boolean;
    fee: number;
    platform: string;
}

export interface IAlbum {
    name: string;
    link: string;
}

export interface ISongState {
    songsList: ISong[];
    total: number;
}

const initState: ISongState = {
    songsList: [],
    total: 0,
};

export interface ISongQuery {
    provider?: string;
    keyword?: string;
    page?: number;
}

export const getSongsList = async (query: ISongQuery) => {
    await initSongsList(query).then(res => {
        initState.total = res.totalCount;
        initState.songsList = res.songs;
    });
    return typedAction('songs/GET_SONGS_LIST', query);
};

type SongAction = ReturnType<typeof getSongsList>;
export const songReducer = async (state = initState, action: SongAction) => {
    switch ((await action).type) {
        case 'songs/GET_SONGS_LIST':
            return { list: state.songsList, total: state.total };
        default:
            return state;
    }
};
