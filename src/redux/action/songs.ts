import { typedAction } from '../helpers';
import { initSongsList } from '../../service/songs';
import { ISongForm, ISongState, GET_SONG_LIST } from '../reducer/song';

export const setFormData = async (query: ISongForm) => {
    await initSongsList(query).then(res => {
        return typedAction(GET_SONG_LIST, { songsList: res.songs, total: res.totalCount });
    });
};

export const getSongList = async (data: ISongState) => {
    return typedAction(GET_SONG_LIST, data);
};

