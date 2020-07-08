import service from './index';
import { ISong } from '../redux/modules/songs';

/**
 * fetch song list
 * @param provider
 * @param keyword
 */
export const getSongsList = async (
    provider: string,
    keyword: string,
    page: number,
): Promise<{ songs: ISong[]; totalCount: number }> => {
    return await service.get('/search', {
        params: {
            provider,
            keyword,
            page,
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
