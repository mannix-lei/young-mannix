import { typedAction } from '../helpers';

export interface ISongForm {
    provider: string;
    keyword: string;
    page: number;
}
const initState: ISongForm = {
    provider: '',
    keyword: '',
    page: 1,
};

export const setSongsForm = (query: ISongForm) => {
    console.log('====================================');
    console.log(query);
    console.log('====================================');
    return typedAction('songs/SET_SONG_FORM', query);
};


export type SongFormAction = ReturnType<typeof setSongsForm>;
export const songFormReducer = (state = initState, action: SongFormAction):ISongForm => {
    switch (action.type) {
        case 'songs/SET_SONG_FORM':
            return state;
        default:
            return state;
    }
};
