import service from './index';
import { ISongQuery, ISong } from '../redux/reducer/song';

/**
 * fetch song list
 * @param provider
 * @param keyword
 */
export const initSongsList = async (query: ISongQuery): Promise<{ songs: ISong[]; totalCount: number }> => {
    return await service.get('/api/search', {
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
    return await service.get(`/api/song_source/${platform}/${id}`);
};

/**
 * load hot songs
 */
export const initHotSong = async (provider: string): Promise<{ songs: ISong[]; totalCount: number }> => {
    return await service.get(`/api/hot_list/${provider}`);
};
