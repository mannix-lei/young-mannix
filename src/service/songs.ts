import service from './index';
import { ISong } from '../view/pages/songs-list/Songs-List';

/**
 * fetch song list
 * @param provider
 * @param keyword
 */
export const getSongsList = async (
    provider: string,
    keyword: string
): Promise<{ songs: ISong[]; totalCount: number }> => {
    return await service.get('/search', {
        params: {
            provider,
            keyword,
        },
    });
};

/**
 * play song
 * @param platform
 * @param id
 */
export const playSong = async (platform: string, id: string) => {
    return await service.get(`/song_source/${platform}/${id}`);
};
