import { Reducer, Action } from "redux";

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
    playing: boolean;
}

export interface IAlbum {
    name: string;
    link: string;
}

export interface ISongInitial {
    songsList: ISong[];
    total: number;
}

const initState: ISongInitial = {
    songsList: [],
    total: 0,
};

export interface ISongQuery {
    provider: string;
    keyword: string;
    page: number;
}

export enum SongActionType {
    GetSongList,
    GetHotSong
}

export interface ISongDispatchAction extends Action<SongActionType> {
    payload: Partial<ISongInitial>;
}

export const songReducer: Reducer<ISongInitial, ISongDispatchAction> = (
    state = initState,
    action
): ISongInitial => {
    switch (action.type) {
        case SongActionType.GetSongList:
            return {
                songsList: action.payload.songsList!,
                total: action.payload.total!,
            };
        case SongActionType.GetHotSong:
            return {
                ...state,
                songsList: action.payload.songsList!,
                total: action.payload.total!,
            };
        default:
            return state;
    }
};
