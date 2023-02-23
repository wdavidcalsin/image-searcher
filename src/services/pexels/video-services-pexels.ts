import { PexelsRequest } from '@/request';

export const VideoServicesPexels = async (query: string) => {
  const resultVideo = (await PexelsRequest()).videos.search({
    query,
    per_page: 10,
  });

  return await resultVideo;
};
