import { getSongList } from '../action/songs';

export interface ISongForm {
    provider: string;
    keyword: string;
    page: number;
}
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

export const SET_SONG_FORM = 'songs/SET_SONG_FORM';
export const GET_SONG_LIST = 'songs/GET_SONG_LIST';

export type SongAction = ReturnType<typeof getSongList>;

export const songReducer = async (
    state = initState,
    action: SongAction
): Promise<ISongForm> => {
    console.log('================action====================');
    console.log(action);
    console.log('====================================');
    switch ((await action).type) {
        case SET_SONG_FORM:
            console.log('========state============================');
            console.log(state);
            console.log('====================================');
        case GET_SONG_LIST:
            console.log(state);
        default:
            return { keyword: '2342', provider: '325', page: 1 };
    }
};
