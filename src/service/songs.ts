import service from './index';
import { ISong, ISongQuery } from '../redux/modules/songs';

/**
 * fetch song list
 * @param provider
 * @param keyword
 */
export const initSongsList = async (query: ISongQuery): Promise<{ songs: ISong[]; totalCount: number }> => {
    return await service.get('/search', {
        params: {
            ...query,
        },
    });
};

/**
 * play song
 * @param platform
 * @param id
 */
export const playSong = async (platform: string, id: string): Promise<{ songSource: string }> => {
    return await service.get(`/song_source/${platform}/${id}`);
};

/**
 * load hot songs
 */
export const initHotSong = async (): Promise<{ songs: ISong[]; totalCount: number }> => {
    return await service.get('/hot_list/netease');
};
