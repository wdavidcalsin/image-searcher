import { PexelsRequestVideos } from '@/request';

export const VideoServicesPexels = async (query: string) => {
  const resultVideo = await PexelsRequestVideos.get(query);

  return resultVideo;
};
