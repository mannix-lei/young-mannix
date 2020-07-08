import { typedAction } from '../helpers';

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
    loading: boolean;
}

const initState: ISongState = {
    songsList: [],
    loading: false,
};

interface ISongQuery {
    provider: string;
    keyword: string;
    page: number;
}

const getSongsList = (query: ISongQuery) => {
    return typedAction('songs/GET_SONGS_LIST', query);
};

type SongAction = ReturnType<typeof getSongsList>;
export const songReducer = (state = initState, action: SongAction) => {
    switch (action.type) {
        case 'songs/GET_SONGS_LIST':
            return {
                ...state,
                songsList: [...state.songsList],
            };
        default:
            return state;
    }
};
